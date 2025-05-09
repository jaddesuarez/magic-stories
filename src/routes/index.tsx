import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary.compenent";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BookCatalog } from "@/pages/BookCatalog";
import { BookReader } from "@/pages/BookReader";
import { Login } from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "books",
        element: <BookCatalog />,
      },
      {
        path: "books/:id",
        element: <BookReader />,
      },
    ],
  },
]);

export default router;
