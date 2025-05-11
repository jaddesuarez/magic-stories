export type TUser = {
  userId: string;
};

export type TBook = {
  id: number;
  title: string;
  author: string;
  description: string;
  coverColor: string;
  publishedDate: string;
  categoryId: number;
  pages: string[];
};

export type TBookSection = {
  bookId: number;
  bookTitle: string;
  startTime: Date;
  pageTimings: TBookSectionPageTiming[];
  endTime: Date | null;
  completed: boolean;
};

export type TBookSectionPageTiming = {
  pageIndex: number;
  timeMs: number;
};
