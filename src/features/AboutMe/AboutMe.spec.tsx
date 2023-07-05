import { render, screen } from "@testing-library/react";
import { AboutMe } from "features/AboutMe/AboutMe";
import React from "react";

describe("About Me", () => {
  it("renders", () => {
    render(<AboutMe />);
    const titleElement = screen.getByText(/coming soon/i);
    expect(titleElement).toBeInTheDocument();
  });
});
