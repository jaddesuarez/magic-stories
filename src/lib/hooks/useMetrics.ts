import { bookSectionAtom } from "@/context/bookSection.context";
import { useAtom } from "jotai";
import { useCallback } from "react";

export const useMetrics = () => {
  const [bookSection, setBookSection] = useAtom(bookSectionAtom);

  const startSection = useCallback(
    (bookId: number, bookTitle: string) => {
      setBookSection({
        bookId: bookId,
        bookTitle: bookTitle,
        startTime: new Date(),
        pageTimings: [],
        endTime: null,
        completed: false,
      });
    },
    [setBookSection]
  );

  const endSection = useCallback(() => {
    if (!bookSection) return;
    setBookSection({
      ...bookSection,
      endTime: new Date(),
      completed: true,
    });
  }, [bookSection, setBookSection]);

  const updatePageTiming = useCallback(
    (pageIndex: number, timeMs: number) => {
      if (!bookSection) return;
      setBookSection({
        ...bookSection,
        pageTimings: [
          ...bookSection.pageTimings.filter(
            (timing) => timing.pageIndex !== pageIndex
          ),
          {
            pageIndex,
            timeMs:
              timeMs +
              (bookSection.pageTimings.find(
                (timing) => timing.pageIndex === pageIndex
              )?.timeMs || 0),
          },
        ],
      });
    },
    [bookSection, setBookSection]
  );

  return {
    bookSection,
    startSection,
    endSection,
    updatePageTiming,
  };
};
