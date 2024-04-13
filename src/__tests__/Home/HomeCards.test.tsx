import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeCards from "@/components/pages/Home/HomeCards";

describe("HomeCards", () => {
  it("should render a header", () => {
    render(<HomeCards />);

    const section = screen.getByRole("heading", { name: /Skills/i });

    expect(section).toBeDefined();
  });

  it("should render a paragraph", () => {
    render(<HomeCards />);

    const paragraph = screen.getByText(/These are the technologies/i);

    expect(paragraph).toBeDefined();
  });

  it("should render 8 HomeCard", () => {
    render(<HomeCards />);

    const homeCard = screen.getAllByRole("link");

    expect(homeCard).toHaveLength(8);
  });
});
