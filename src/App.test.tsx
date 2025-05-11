import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { vi } from "vitest";

vi.mock("@/lib/hooks/useUser", () => ({
  useUser: () => ({
    user: null,
  }),
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders the navigation bar with correct elements", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    expect(screen.getByText("Catalog")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });
});
