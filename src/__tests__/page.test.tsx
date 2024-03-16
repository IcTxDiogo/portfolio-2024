import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(pages)/page";

describe("Home", () => {
  it("should render header", () => {
    render(<Home />);

    const header = screen.getByText(/Hello world/i);

    expect(header).toBeDefined();
  });
});
