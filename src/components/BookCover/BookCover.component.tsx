import BookGreen from "@/assets/book-green.png";
import BookPink from "@/assets/book-pink.png";
import BookBlack from "@/assets/book-black.png";
import BookYellow from "@/assets/book-yellow.png";
import BookRed from "@/assets/book-red.png";
import BookBlue from "@/assets/book-blue.png";

interface BookCoverProps {
  color: string;
}

export const BookCover: React.FC<BookCoverProps> = ({ color }) => {
  const getBookCover = () => {
    switch (color) {
      case "green":
        return BookGreen;
      case "pink":
        return BookPink;
      case "black":
        return BookBlack;
      case "yellow":
        return BookYellow;
      case "red":
        return BookRed;
      case "blue":
        return BookBlue;
      default:
        return BookBlack;
    }
  };
  return <img src={getBookCover()} alt="book cover" />;
};
