import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeTimeLine from "@/components/pages/Home/HomeTimeLine";

describe("TimeLine", () => {
  it("render tree different times", () => {
    render(<HomeTimeLine />);

    const timeLine = screen.getAllByRole("time");

    expect(timeLine).toBeDefined();
  });

  it("render tree different p", () => {
    render(<HomeTimeLine />);

    const paragraph = screen.getAllByRole("paragraph");

    expect(paragraph).toBeDefined();
  });
});
