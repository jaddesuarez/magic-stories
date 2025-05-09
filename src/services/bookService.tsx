const API_URL = "http://localhost:3001";

export const bookService = {
  // Get all books
  getAllBooks: async () => {
    const response = await fetch(`${API_URL}/books`);
    return response.json();
  },

  // Get a single book by id
  getBookById: async (id: number) => {
    const response = await fetch(`${API_URL}/books/${id}`);
    return response.json();
  },

  // Filter books by category
  filterBooks: async (category: string) => {
    const response = await fetch(`${API_URL}/books?category=${category}`);
    return response.json();
  },
};
