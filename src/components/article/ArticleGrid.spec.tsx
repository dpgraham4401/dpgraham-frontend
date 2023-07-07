import { render, screen } from "@testing-library/react";
import { ArticlesGrid } from "components/article/ArticlesGrid";
import { Article } from "features/Articles";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const mockArticles: Article[] = [
  {
    id: 1,
    content: "# Hello World",
    title: "Hello World",
    updateDate: new Date(),
    createDate: new Date().toDateString(),
  },
  {
    id: 2,
    content: "# foo bar",
    title: "foo bar",
    updateDate: new Date(),
    createDate: new Date().toDateString(),
  },
];

describe("Articles Grid", () => {
  it("renders a number of cards", () => {
    render(
      <BrowserRouter>
        <ArticlesGrid articles={mockArticles} />
      </BrowserRouter>
    );
    mockArticles.forEach((article) => {
      const titleElement = screen.getByText(article.title);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
