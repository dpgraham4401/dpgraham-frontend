import { Article } from "features/Article";
import React from "react";
import { render, screen } from "@testing-library/react";
import DpgMarkdown from "components/DpgMarkdown/index";

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
