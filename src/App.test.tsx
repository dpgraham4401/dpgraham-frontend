import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("renders the home page initially", () => {
    render(<App />);
    const titleElement = screen.getByText(/David Graham/i);
    expect(titleElement).toBeInTheDocument();
  });
});
