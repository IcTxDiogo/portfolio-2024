import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeCard from "@/components/pages/Home/HomeCard";

const mockProps = {
  href: "https://nextjs.org/",
  src: "/images/home/skillsIcons/nextjs.svg",
  description: "Next",
};

describe("HomeCard", () => {
  it("should render a anchor", () => {
    render(<HomeCard {...mockProps} />);

    const anchor = screen.getByRole("link", { name: /Next/i });

    expect(anchor).toBeDefined();
  });

  it("should render a image", () => {
    render(<HomeCard {...mockProps} />);

    const image = screen.getByAltText("Next-logo");

    expect(image).toBeDefined();
  });

  it("should render a heading", () => {
    render(<HomeCard {...mockProps} />);

    const heading = screen.getByRole("heading", { name: /Next/i });

    expect(heading).toBeDefined();
  });
});
