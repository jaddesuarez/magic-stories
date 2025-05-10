import { TBook } from "@/lib/types/index.type";
import { useNavigate } from "react-router-dom";
import { URLS, CATEGORIES } from "@/lib/consts";
import { BookCover } from "@/components/BookCover/BookCover.component";

interface BookCardProps {
  book: TBook;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  const handleBookSelect = (bookId: number) => {
    navigate(`${URLS.READER}/${bookId}`);
  };

  return (
    <div
      onClick={() => handleBookSelect(book.id)}
      className="flex flex-col justify-center items-center overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
    >
      <div className="h-64 flex items-center justify-center relative">
        <div className="relative">
          {book.coverColor ? (
            <BookCover color={book.coverColor} />
          ) : (
            <span className="text-6xl">📚</span>
          )}
          <div className="absolute top-3 right-3 bg-amber-100 px-3 py-1 rounded-full text-sm font-medium text-blue-400">
            {
              CATEGORIES.find((category) => category.id === book.categoryId)
                ?.label
            }
          </div>
        </div>
      </div>
      <div className="p-6 mt-4 bg-amber-50/80 backdrop-blur-sm rounded-3xl flex flex-col justify-center items-center max-w-xs border border-amber-200">
        <h2 className="text-2xl text-center font-bold text-blue-400 mb-2">
          {book.title}
        </h2>
        <p className="text-blue-400 mb-2">by {book.author}</p>
        <p className="text-blue-300 text-center text-sm mb-4 line-clamp-2">
          {book.description}
        </p>
      </div>
    </div>
  );
};
