export type TUser = {
  userId: string;
};

export type TBook = {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  category: string;
  totalPages: number;
  pages: string[];
};
