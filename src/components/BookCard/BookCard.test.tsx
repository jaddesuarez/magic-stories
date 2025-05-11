import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BookCard } from "./BookCard.component";
import { URLS, CATEGORIES } from "@/lib/consts";
import { TBook } from "@/lib/types/index.type";

// Mock the useNavigate hook
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("BookCard", () => {
  const mockBook: TBook = {
    id: 1,
    title: "Test Book",
    author: "Test Author",
    description: "This is a test book description",
    categoryId: 1,
    coverColor: "#FF5733",
    publishedDate: "2024-03-20",
    pages: ["Page 1", "Page 2", "Page 3"],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Book")).toBeInTheDocument();
  });

  it("displays book information correctly", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("by Test Author")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test book description")
    ).toBeInTheDocument();
  });

  it("displays category label correctly", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    const categoryLabel = CATEGORIES.find(
      (category) => category.id === mockBook.categoryId
    )?.label;
    expect(screen.getByText(categoryLabel!)).toBeInTheDocument();
  });

  it("navigates to reader page when clicked", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Test Book"));
    expect(mockNavigate).toHaveBeenCalledWith(`${URLS.READER}/${mockBook.id}`);
  });

  it("renders book cover with color when coverColor is provided", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    const bookCover = screen.getByTestId("book-cover");
    expect(bookCover).toBeInTheDocument();
  });

  it("renders emoji when no coverColor is provided", () => {
    const bookWithoutCover: TBook = { ...mockBook, coverColor: "" };
    render(
      <BrowserRouter>
        <BookCard book={bookWithoutCover} />
      </BrowserRouter>
    );

    expect(screen.getByText("📚")).toBeInTheDocument();
  });
});
