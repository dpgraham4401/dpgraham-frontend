import { render, screen } from "@testing-library/react";
import { AboutMe } from "features/AboutMe/AboutMe";
import React from "react";

describe("About Me", () => {
  it("renders", () => {
    render(<AboutMe />);
    const titleElement = screen.getByText(/Not all who wonder all lost.../i);
    expect(titleElement).toBeInTheDocument();
  });
});
