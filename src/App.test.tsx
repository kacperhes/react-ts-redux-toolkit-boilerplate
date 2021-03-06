import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders Hello, World!", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
