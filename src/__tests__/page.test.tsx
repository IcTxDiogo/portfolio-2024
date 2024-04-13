import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(pages)/(home)/page";

describe("Home", () => {
  it("should render main", () => {
    render(<Home />);

    const header = screen.getByRole("main");

    expect(header).toBeDefined();
  });
});
