import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { URLS } from "@/lib/consts";
import { useUser } from "@/lib/hooks/useUser";

const NavBar: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <></>
        <img
          src={Logo}
          alt="Logo"
          onClick={() => navigate(URLS.HOME)}
          className="hidden md:block cursor-pointer"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Button
          variant="link"
          onClick={() => navigate(URLS.CATALOG)}
          className="text-orange-500 font-bold text-lg px-3 py-1"
        >
          Catalog
        </Button>
        <Button
          variant="outline"
          className="bg-orange-500 text-white rounded-full p-5"
          onClick={() => navigate(user ? URLS.CATALOG : URLS.LOGIN)}
        >
          {user ? user.userId : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
