import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeTimeLineItem from "@/components/pages/Home/HomeTimeLineItem";

const mockData = {
  date: "2022-01-01",
  title: "Title",
  subtitle: "Subtitle",
  description: "Description",
};
describe("HomeTimeLineItem", () => {
  it("should render the date", () => {
    render(<HomeTimeLineItem {...mockData} />);

    const date = screen.getByText(mockData.date);

    expect(date).toBeDefined();
  });

  it("should render the title", () => {
    render(<HomeTimeLineItem {...mockData} />);

    const title = screen.getByText(mockData.title);

    expect(title).toBeDefined();
  });

  it("should render the subtitle", () => {
    render(<HomeTimeLineItem {...mockData} />);

    const subtitle = screen.getByText(mockData.subtitle);

    expect(subtitle).toBeDefined();
  });

  it("should render the description", () => {
    render(<HomeTimeLineItem {...mockData} />);

    const description = screen.getByText(mockData.description);

    expect(description).toBeDefined();
  });
});
