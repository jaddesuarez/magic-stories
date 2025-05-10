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
  totalPages: number;
  pages: string[];
};
