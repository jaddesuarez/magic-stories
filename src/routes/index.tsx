import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary.compenent";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BookCatalog } from "@/pages/BookCatalog";
import { BookReader } from "@/pages/BookReader";
import { Login } from "@/pages/Login";
import { URLS } from "@/lib/consts";

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
        path: URLS.LOGIN,
        element: <Login />,
      },
      {
        path: URLS.CATALOG,
        element: <BookCatalog />,
      },
      {
        path: `${URLS.READER}/:id`,
        element: <BookReader />,
      },
    ],
  },
]);

export default router;
