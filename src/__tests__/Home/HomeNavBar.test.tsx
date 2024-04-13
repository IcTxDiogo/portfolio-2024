import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeNavBar from "@/components/pages/Home/HomeNavBar";

describe("HomeNavBar", () => {
  it("should render the logo", () => {
    render(<HomeNavBar />);

    const logo = screen.getByText(/Logo/i);

    expect(logo).toBeDefined();
  });

  it("should render 2 links", () => {
    render(<HomeNavBar />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });

  it("should render the theme mode toggle", () => {
    render(<HomeNavBar />);

    const themeModeToggle = screen.getByText(/Toggle theme/i);

    expect(themeModeToggle).toBeDefined();
  });
});
