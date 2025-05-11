import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar.component";

describe("ProgressBar", () => {
  it("renders without crashing", () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
  });

  it("applies default styles correctly", () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass(
      "relative",
      "h-5",
      "w-full",
      "overflow-hidden",
      "rounded-full",
      "bg-amber-300"
    );
  });

  it("applies custom className when provided", () => {
    render(<ProgressBar value={50} className="custom-class" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("custom-class");
  });

  it("sets progress indicator position based on value", () => {
    render(<ProgressBar value={75} />);
    const indicator = screen.getByRole("progressbar").firstChild;
    expect(indicator).toHaveStyle({ transform: "translateX(-25%)" });
  });

  it("handles 0% progress correctly", () => {
    render(<ProgressBar value={0} />);
    const indicator = screen.getByRole("progressbar").firstChild;
    expect(indicator).toHaveStyle({ transform: "translateX(-100%)" });
  });

  it("handles 100% progress correctly", () => {
    render(<ProgressBar value={100} />);
    const indicator = screen.getByRole("progressbar").firstChild;
    expect(indicator).toHaveStyle({ transform: "translateX(-0%)" });
  });

  it("handles undefined value by defaulting to 0", () => {
    render(<ProgressBar />);
    const indicator = screen.getByRole("progressbar").firstChild;
    expect(indicator).toHaveStyle({ transform: "translateX(-100%)" });
  });

  it("applies correct styles to the indicator", () => {
    render(<ProgressBar value={50} />);
    const indicator = screen.getByRole("progressbar").firstChild;
    expect(indicator).toHaveClass(
      "h-full",
      "w-full",
      "flex-1",
      "bg-blue-500",
      "transition-all"
    );
  });
});
