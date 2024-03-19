import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/pages/Home/Hero";

describe("Hero", () => {
  it("should render header", () => {
    render(<Hero />);

    const header = screen.getByRole("heading", { name: /This is me, Diogo/i });

    expect(header).toBeDefined();
  });

  it("should render paragraph", () => {
    render(<Hero />);

    const paragraph = screen.getByText(
      /This is the place where your ideas take flight and become reality through the power of my expertise/i,
    );

    expect(paragraph).toBeDefined();
  });

  it("should render button", () => {
    render(<Hero />);

    const button = screen.getByRole("button", {
      name: /let's make the dream come true/i,
    });

    expect(button).toBeDefined();
  });

  it("should render image", () => {
    render(<Hero />);

    const image = screen.getByAltText("profile picture");

    expect(image).toBeDefined();
  });
});
