import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeTimeLine from "@/components/pages/Home/HomeTimeLine";

describe("TimeLine", () => {
  it("render h2", () => {
    render(<HomeTimeLine />);

    const timeLine = screen.getAllByRole("heading", { level: 2 });

    expect(timeLine).toBeDefined();
  });

  it("render tree different h3", () => {
    render(<HomeTimeLine />);

    const paragraph = screen.getAllByRole("heading", { level: 3 });

    expect(paragraph).toBeDefined();
    expect(paragraph.length).toBe(3);
  });
});
