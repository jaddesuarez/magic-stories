import { TBookSectionPageTiming } from "./types/index.type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { intervalToDuration } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAverageTimePerPage = (
  pageTimings: TBookSectionPageTiming[]
): number => {
  if (pageTimings.length === 0) return 0;

  const totalMs = pageTimings.reduce((acc, { timeMs }) => acc + timeMs, 0);
  return Math.floor(totalMs / pageTimings.length);
};

export const getTotalTimeSpent = (start: Date, end: Date | null): string => {
  if (!end) return "In Progress";

  const duration = intervalToDuration({ start, end });
  const parts = [];

  if (duration.hours) parts.push(`${duration.hours}h`);
  if (duration.minutes) parts.push(`${duration.minutes}m`);
  if (duration.seconds) parts.push(`${duration.seconds}s`);

  return parts.length ? parts.join(" ") : "0s";
};
