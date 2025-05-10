import { bookService } from "@/services/bookService";
import { useQuery } from "@tanstack/react-query";

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
    data: book,
    isLoading: isLoadingBook,
    error: errorBook,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: () => bookService.getBookById(id ?? 0),
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
    book,
    isLoadingBook,
    errorBook,
    booksByCategory,
    isLoadingBooksByCategory,
    errorBooksByCategory,
  };
};
