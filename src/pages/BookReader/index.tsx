import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBooks } from "@/lib/hooks/useBooks";
import { useMetrics } from "@/lib/hooks/useMetrics";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar.component";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { URLS } from "@/lib/consts";
import { cn } from "@/lib/utils";
export const BookReader: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { book, isLoadingBook, errorBook } = useBooks(Number(id));
  const { startSection, endSection, updatePageTiming } = useMetrics();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageTiming, setCurrentPageTiming] = useState(0);
  const [pageEffect, setPageEffect] = useState(false);
  const [shouldCount, setShouldCount] = useState(true);

  const handlePageChange = (newPage: number) => {
    setShouldCount(false);

    if (newPage > (book?.pages.length || 0) - 1) {
      finishBook();
      return;
    }

    updatePageTiming(currentPage, currentPageTiming);

    setPageEffect(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setCurrentPageTiming(0);
      setShouldCount(true);
      setPageEffect(false);
    }, 300);
  };

  const goToPrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const finishBook = () => {
    endSection(currentPage, currentPageTiming);
    navigate(`${URLS.BOOK_METRICS}/${id}`);
  };

  useEffect(() => {
    if (book) {
      startSection(book.id, book.title);
    }
  }, [book, startSection]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (shouldCount) {
      timer = setInterval(() => {
        setCurrentPageTiming((prev) => prev + 1);
      }, 1);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [shouldCount]);

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
    <div className="w-full max-w-xs md:max-w-xl lg:max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <Button
          variant="ghost"
          className="text-blue-500"
          onClick={() => navigate(URLS.CATALOG)}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />{" "}
          <span className="hidden md:block">Back to Books</span>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
          {book.title}
        </h1>
        <div className="w-5 md:w-[100px]"></div>
      </header>

      {/* Page */}
      <div
        className={cn(
          "bg-white rounded-lg shadow-lg min-h-[50vh] flex flex-col justify-center p-8 mb-8",
          pageEffect
            ? "opacity-0 transform scale-95 transition-all ease-in-out duration-300"
            : "opacity-100 transform scale-100 transition-all ease-in-out duration-300"
        )}
      >
        <div className="max-w-none text-center md:text-left">
          <p className="text-xl md:text-2xl">{book.pages[currentPage]}</p>
        </div>
      </div>
      {/* Page Controls */}
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="h-12 w-12 rounded-full bg-blue-500 text-white hover:bg-blue-600"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="text-center">
            <span className="text-lg font-bold text-orange-500">
              Page <span className="underline">{currentPage + 1}</span> of{" "}
              {book.pages.length}
            </span>
          </div>

          <Button
            onClick={goToNextPage}
            className="h-12 w-12 rounded-full bg-blue-500 text-white hover:bg-blue-600"
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <ProgressBar value={progress} />
      </div>
    </div>
  );
};
