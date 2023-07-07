import { render, screen } from "@testing-library/react";
import { ArticleCard } from "components/article";
import { Article } from "features/Articles";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const mockArticle: Article = {
  id: 1,
  content: "# Hello World",
  title: "Hello World",
  updateDate: new Date(),
  createDate: new Date().toDateString(),
};

describe("Articles Card", () => {
  it("shows the article title", () => {
    render(
      <BrowserRouter>
        <ArticleCard article={mockArticle} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  });
  it("Shows a default image with alternative text", () => {
    render(
      <BrowserRouter>
        <ArticleCard article={mockArticle} />
      </BrowserRouter>
    );
    expect(screen.getByAltText(/default image/i)).toBeInTheDocument();
  });
  // alt="default image with triangles"
});
