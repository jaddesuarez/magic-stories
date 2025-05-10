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
        <button
          onClick={() => navigate(URLS.CATALOG)}
          className="text-amber-600 font-bold text-lg px-3 py-1 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
        >
          Catalog
        </button>
        <Button
          variant="outline"
          className="bg-amber-600 text-white rounded-full cursor-pointer p-5"
          onClick={() => navigate(user ? URLS.CATALOG : URLS.LOGIN)}
        >
          {user ? user.userId : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
