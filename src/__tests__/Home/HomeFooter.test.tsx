import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeFooter from "@/components/pages/Home/HomeFooter";

const year = new Date().getFullYear();
describe("HomeFooter", () => {
  it("should render copyright text", () => {
    render(<HomeFooter />);
    const copyrightText = screen.getByText(
      `© ${year} Diogo Santos. All rights reserved.`,
    );
    expect(copyrightText).toBeDefined();
  });

  it("should render two link icons", () => {
    render(<HomeFooter />);
    const icons = screen.getAllByRole("link");
    expect(icons).toHaveLength(2);
  });
});
