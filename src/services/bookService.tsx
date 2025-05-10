const API_URL = "http://localhost:3001";
import { TBook } from "@/lib/types/index.type";

export const bookService = {
  // Get all books
  getAllBooks: async (): Promise<TBook[]> => {
    const response = await fetch(`${API_URL}/books`);
    return response.json();
  },

  // Get a single book by id
  getBookById: async (id: number): Promise<TBook> => {
    const response = await fetch(`${API_URL}/books/${id}`);
    return response.json();
  },

  // Filter books by category
  filterBooks: async (categoryId: number): Promise<TBook[]> => {
    const response = await fetch(`${API_URL}/books?categoryId=${categoryId}`);
    return response.json();
  },
};
