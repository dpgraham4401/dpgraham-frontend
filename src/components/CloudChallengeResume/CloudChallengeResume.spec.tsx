import { render, screen } from "@testing-library/react";
import { CloudChallengeResume } from "components/CloudChallengeResume/CloudChallengeResume";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Cloud Resume Challenge", () => {
  it("renders", () => {
    render(
      <BrowserRouter>
        <CloudChallengeResume />
      </BrowserRouter>
    );
    const myName = screen.getByText(/David/i);
    expect(myName).toBeInTheDocument();
  });
});
