import { bookSectionAtom } from "@/context/bookSection.context";
import { useAtom } from "jotai";
import { useCallback } from "react";

export const useMetrics = () => {
  const [bookSection, setBookSection] = useAtom(bookSectionAtom);

  const startSection = useCallback(
    (bookId: number) => {
      setBookSection({
        bookId: bookId,
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

  const addPageTiming = useCallback(
    (pageIndex: number, timeMs: number) => {
      if (!bookSection) return;
      setBookSection({
        ...bookSection,
        pageTimings: [...bookSection.pageTimings, { pageIndex, timeMs }],
      });
    },
    [bookSection, setBookSection]
  );

  return {
    startSection,
    endSection,
    addPageTiming,
  };
};
