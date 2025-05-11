import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBooks } from "@/lib/hooks/useBooks";
import { useMetrics } from "@/lib/hooks/useMetrics";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar.component";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { URLS } from "@/lib/consts";

export const BookReader: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { book, isLoadingBook, errorBook } = useBooks(Number(id));
  const { startSection, endSection, addPageTiming } = useMetrics();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageTiming, setCurrentPageTiming] = useState(0);
  const [pageEffect, setPageEffect] = useState(false);

  useEffect(() => {
    if (book) {
      startSection(book.id);
    }
  }, [book, startSection]);

  if (!id) {
    navigate(URLS.CATALOG);
    return null;
  }

  if (isLoadingBook) {
    return <div>Loading...</div>;
  }
  if (errorBook || !book) {
    return <div>Error: {errorBook?.message}</div>;
  }

  const progress = ((currentPage + 1) / book.pages.length) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <Button
          variant="ghost"
          className="text-blue-500"
          onClick={() => navigate(URLS.CATALOG)}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Books
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
          {book.title}
        </h1>
        <div className="w-[100px]"></div>
      </header>

      <ProgressBar value={progress} />
    </div>
  );
};
