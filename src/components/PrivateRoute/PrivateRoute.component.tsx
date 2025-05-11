import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@/lib/hooks/useUser";
import { URLS } from "@/lib/consts";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to={URLS.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
