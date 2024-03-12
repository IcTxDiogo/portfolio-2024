import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("shadcn", () => {
  it("should render a button", () => {
    render(<Button />);

    const header = screen.findAllByRole("button");

    expect(header).toBeDefined();
  });
});
