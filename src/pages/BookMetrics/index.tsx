import { useEffect } from "react";
import { useMetrics } from "@/lib/hooks/useMetrics";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { URLS } from "@/lib/consts";
import { getAverageTimePerPage, getTotalTimeSpent } from "@/lib/utils";
import Trophy from "@/assets/Trophy.png";

export const BookMetrics = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { bookSection } = useMetrics();

  useEffect(() => {
    if (!bookSection || !id) {
      navigate(URLS.CATALOG);
    }
  }, [bookSection, id, navigate]);

  if (!bookSection || !id) {
    return null;
  }

  return (
    <div className="page-container md:h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col max-w-xs md:max-w-lg  items-center gap-4 mb-10">
        <div className="flex justify-center items-center w-48 h-48 my-6 rounded-full border-4 bg-white border-yellow-500 shadow-lg animate-[bounce_2s_ease-in-out_infinite] hover:scale-105 transition-transform">
          <img src={Trophy} alt="Trophy" className="w-1/2 h-1/2" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4 text-amber-400">
          Congratulations!
        </h1>
        <p className="text-lg text-bold text-gray-700 text-center mb-4">
          You finished reading{" "}
          <span className="text-amber-500">{bookSection.bookTitle}</span>
        </p>
        <Card className="max-w-xs md:max-w-xl flex flex-col items-center justify-center p-4 bg-white border-none shadow-lg">
          <CardTitle className="text-3xl w-full font-bold text-center my-4 text-blue-500">
            Your Reading Stats
          </CardTitle>
          <div className="flex flex-col md:flex-row w-full md:min-w-xl gap-4">
            <Card className="border-none w-full md:mx-4 bg-blue-100">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-blue-500">
                  Total Reading Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-black text-center mb-4">
                  {getTotalTimeSpent(
                    bookSection.startTime,
                    bookSection.endTime
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="border-none w-full md:mx-4 bg-green-100">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-green-500">
                  Average Per Page
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-black text-center mb-4">
                  {getAverageTimePerPage(bookSection.pageTimings)}ms
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-none w-full bg-amber-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center text-amber-500">
                Total Pages Read
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold text-black text-center mb-4">
                {bookSection.pageTimings.length}
              </h1>
            </CardContent>
          </Card>
        </Card>
        <Button
          className="w-full rounded-full p-6 text-lg font-bold bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => navigate(URLS.CATALOG)}
        >
          Explore Other Books
        </Button>
      </div>
    </div>
  );
};
