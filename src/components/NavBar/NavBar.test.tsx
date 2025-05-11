import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.component";
import { useUser } from "@/lib/hooks/useUser";
import { URLS } from "@/lib/consts";

// Mock the useUser hook
vi.mock("@/lib/hooks/useUser", () => ({
  useUser: vi.fn(),
}));

// Mock the useNavigate hook
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("NavBar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    (useUser as Mock).mockReturnValue({ user: null });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  it("displays correct navigation elements for non-logged in user", () => {
    (useUser as Mock).mockReturnValue({ user: null });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText("Catalog")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("displays correct navigation elements for logged in user", () => {
    const mockUser = { userId: "testUser123" };
    (useUser as Mock).mockReturnValue({ user: mockUser });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText("Catalog")).toBeInTheDocument();
    expect(screen.getByText("testUser123")).toBeInTheDocument();
  });

  it("navigates to home when logo is clicked", () => {
    (useUser as Mock).mockReturnValue({ user: null });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByAltText("Logo"));
    expect(mockNavigate).toHaveBeenCalledWith(URLS.HOME);
  });

  it("navigates to catalog when catalog button is clicked", () => {
    (useUser as Mock).mockReturnValue({ user: null });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Catalog"));
    expect(mockNavigate).toHaveBeenCalledWith(URLS.CATALOG);
  });

  it("navigates to login when get started button is clicked for non-logged in user", () => {
    (useUser as Mock).mockReturnValue({ user: null });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Get Started"));
    expect(mockNavigate).toHaveBeenCalledWith(URLS.LOGIN);
  });

  it("navigates to catalog when user button is clicked for logged in user", () => {
    const mockUser = { userId: "testUser123" };
    (useUser as Mock).mockReturnValue({ user: mockUser });
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("testUser123"));
    expect(mockNavigate).toHaveBeenCalledWith(URLS.CATALOG);
  });
});
