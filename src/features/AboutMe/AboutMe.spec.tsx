import { render, screen } from "@testing-library/react";
import { AboutMe } from "features/AboutMe/AboutMe";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const TestComponent = () => {
  return (
    <BrowserRouter>
      <AboutMe />
    </BrowserRouter>
  );
};

describe("About Me", () => {
  it("renders", () => {
    render(<TestComponent />);
    const titleElement = screen.getByText(/my name is david graham/i);
    expect(titleElement).toBeInTheDocument();
  });
});
