import { render, screen } from "@testing-library/react";
import { ArticlesOverview } from "components/ArticlesOverview/ArticlesOverview";
import React from "react";

describe("Article List", () => {
  it("renders all the articles", () => {
    render(<ArticlesOverview />);
    const titleElement = screen.getByText(/coming soon/i);
    expect(titleElement).toBeInTheDocument();
  });
});
