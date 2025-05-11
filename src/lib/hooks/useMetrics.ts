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

  const updatePageTiming = useCallback(
    (pageIndex: number, timeMs: number) => {
      if (!bookSection) return;

      const updatedPageTimings = [
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
      ].sort((a, b) => a.pageIndex - b.pageIndex);

      setBookSection({
        ...bookSection,
        pageTimings: updatedPageTimings,
      });

      return updatedPageTimings;
    },
    [bookSection, setBookSection]
  );

  const endSection = useCallback(
    (pageIndex: number, timeMs: number) => {
      if (!bookSection) return;
      const updatedPageTimings = updatePageTiming(pageIndex, timeMs);
      setBookSection({
        ...bookSection,
        endTime: new Date(),
        completed: true,
        pageTimings: updatedPageTimings || [],
      });
    },
    [bookSection, setBookSection, updatePageTiming]
  );

  return {
    bookSection,
    startSection,
    endSection,
    updatePageTiming,
  };
};
