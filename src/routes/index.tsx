import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary.compenent";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { BookCatalog } from "@/pages/BookCatalog";
import { BookReader } from "@/pages/BookReader";
import { Login } from "@/pages/Login";
import { URLS } from "@/lib/consts";
import App from "@/App";
import { PrivateRoute } from "@/components/PrivateRoute/PrivateRoute.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: (
          <PrivateRoute>
            <BookReader />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
