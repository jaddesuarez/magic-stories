import { bookService } from "@/services/bookService";
import { useQuery } from "@tanstack/react-query";
import { TBook } from "@/lib/types/index.type";

export const useBooks = (id?: number, categoryId?: number) => {
  const {
    data: books,
    isLoading: isLoadingBooks,
    error: errorBooks,
  } = useQuery({
    queryKey: ["books"],
    queryFn: bookService.getAllBooks,
  });

  const {
    data: booksById,
    isLoading: isLoadingBook,
    error: errorBook,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: () => bookService.getBookById(id!),
    enabled: !!id,
    select: (data: TBook[]) => data[0],
  });

  const {
    data: booksByCategory,
    isLoading: isLoadingBooksByCategory,
    error: errorBooksByCategory,
  } = useQuery({
    queryKey: ["booksByCategory", categoryId],
    queryFn: () => bookService.filterBooks(categoryId ?? 0),
  });

  return {
    books,
    isLoadingBooks,
    errorBooks,
    book: booksById,
    isLoadingBook,
    errorBook,
    booksByCategory,
    isLoadingBooksByCategory,
    errorBooksByCategory,
  };
};
