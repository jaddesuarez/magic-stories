import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BookCover } from "./BookCover.component";

// Mock the book cover images
vi.mock("@/assets/book-green.png", () => ({ default: "green-book-mock" }));
vi.mock("@/assets/book-pink.png", () => ({ default: "pink-book-mock" }));
vi.mock("@/assets/book-black.png", () => ({ default: "black-book-mock" }));
vi.mock("@/assets/book-yellow.png", () => ({ default: "yellow-book-mock" }));
vi.mock("@/assets/book-red.png", () => ({ default: "red-book-mock" }));
vi.mock("@/assets/book-blue.png", () => ({ default: "blue-book-mock" }));

describe("BookCover", () => {
  it("renders without crashing", () => {
    render(<BookCover color="black" />);
    expect(screen.getByAltText("book cover")).toBeInTheDocument();
  });

  it("renders green book cover when color is green", () => {
    render(<BookCover color="green" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "green-book-mock");
  });

  it("renders pink book cover when color is pink", () => {
    render(<BookCover color="pink" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "pink-book-mock");
  });

  it("renders black book cover when color is black", () => {
    render(<BookCover color="black" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "black-book-mock");
  });

  it("renders yellow book cover when color is yellow", () => {
    render(<BookCover color="yellow" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "yellow-book-mock");
  });

  it("renders red book cover when color is red", () => {
    render(<BookCover color="red" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "red-book-mock");
  });

  it("renders blue book cover when color is blue", () => {
    render(<BookCover color="blue" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "blue-book-mock");
  });

  it("renders black book cover as default when color is not recognized", () => {
    render(<BookCover color="unknown" />);
    const img = screen.getByAltText("book cover");
    expect(img).toHaveAttribute("src", "black-book-mock");
  });
});
