import { render, screen } from "@testing-library/react";
import { DpgMarkdown } from "components/DpgMarkdown";
import { Article } from "features/Articles";
import React from "react";

const mockArticle: Article = {
  id: 1,
  title: "Hello World",
  content: "# Hello World",
  createDate: "2021-10-10",
  updateDate: new Date(),
};

describe("DpgMarkdown", () => {
  it("Renders", () => {
    render(<DpgMarkdown article={mockArticle} />);
    const titleElement = screen.getByText("Hello World");
    expect(titleElement).toBeInTheDocument();
  });
});
