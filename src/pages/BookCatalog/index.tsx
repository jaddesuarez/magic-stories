import { useBooks } from "@/lib/hooks/useBooks";
import { useState } from "react";
import { BookCard } from "@/components/BookCard/BookCard.component";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { useUser } from "@/lib/hooks/useUser";
import { useNavigate } from "react-router-dom";
import { URLS } from "@/lib/consts";

export const BookCatalog: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { books, isLoadingBooks, errorBooks, booksByCategory } = useBooks(
    undefined,
    selectedCategory
  );

  const displayedBooks = selectedCategory === 0 ? books : booksByCategory;

  if (!user) {
    navigate(URLS.LOGIN);
  }

  if (isLoadingBooks) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="text-6xl animate-bounce">📚</div>
      </div>
    );
  }

  if (errorBooks) {
    return (
      <div className="text-center p-8 bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen flex items-center justify-center">
        <div className="bg-white/80 p-8 rounded-3xl shadow-lg">
          <div className="text-6xl mb-4">😢</div>
          <div className="text-xl text-red-600">
            Oops! Something went wrong: {errorBooks.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-500 mb-4 animate-fade-in">
            Choose Your Magical Adventure! ✨
          </h1>
          <p className="text-blue-400 text-xl">
            Discover amazing stories that will take you to magical worlds!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "p-6 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md",
                selectedCategory === category.id
                  ? "bg-blue-300 text-white shadow-lg ring-2 ring-blue-400 hover:bg-blue-500"
                  : "bg-white text-blue-400 hover:bg-blue-50"
              )}
            >
              <span className="mr-2 text-2xl">{category.emoji}</span>
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBooks?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};
