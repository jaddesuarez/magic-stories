import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { URLS } from "@/lib/consts";
import { cn } from "@/lib/utils";
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Child with books",
    bg: "bg-blue-200",
    shape: "rounded-full",
  },
  {
    src: "https://images.unsplash.com/photo-1585597648262-4ec84d233732?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Girl with laptop",
    bg: "bg-yellow-200",
    shape: "rounded-2xl",
  },
  {
    src: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Girl reading",
    bg: "bg-lime-200",
    shape: "rounded-2xl",
  },
  {
    src: "https://images.unsplash.com/photo-1625999874116-dba9a603fa24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Graduate kids",
    bg: "bg-orange-200",
    shape: "rounded-2xl",
  },
];

const statImages = [
  "https://images.unsplash.com/photo-1625595234473-c00c86c73353?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1677179241724-08c316f56f30?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681495130008-cf8aa84a5f4a?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-amber-500">DIVE</span> <span>INTO THE</span>{" "}
              <span className="block">GREATNESS OF</span>{" "}
              <span className="text-blue-600">READING.</span>{" "}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
              A magical reading platform for kids where young readers can
              explore amazing books, track their reading journey, and watch
              their progress grow with every page turned
            </p>
          </div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg cursor-pointer"
            onClick={() => navigate(URLS.LOGIN)}
          >
            Get Started
          </Button>
          <div className="flex items-center gap-6 mt-10">
            <div className="flex -space-x-4">
              {statImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Student"
                  className="w-14 h-14 rounded-full border-4 border-white shadow-md object-cover"
                />
              ))}
            </div>
            <div>
              <div className="text-2xl font-extrabold text-black">
                1M <span className="text-orange-500">Readers</span>
              </div>
              <div className="text-gray-500 text-sm">
                Today's readers
                <br />
                tomorrow's{" "}
                <span className="text-black font-semibold">creators</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6 w-full max-w-lg">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={cn(
                "relative aspect-square flex items-center justify-center overflow-hidden",
                img.bg,
                img.shape
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={cn(
                  "w-32 h-32 md:w-40 md:h-40 object-cover",
                  img.shape
                )}
              />
              {i === 0 && (
                <span className="absolute -left-3 -bottom-3 text-lime-600 text-3xl">
                  ❃
                </span>
              )}
              {i === 1 && (
                <span className="absolute -right-3 -top-3 text-orange-400 text-3xl">
                  ❃
                </span>
              )}
              {i === 2 && (
                <span className="absolute -left-3 -top-3 text-lime-400 text-3xl">
                  ❃
                </span>
              )}
              {i === 3 && (
                <span className="absolute -right-3 -bottom-3 text-blue-400 text-3xl">
                  ❃
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
