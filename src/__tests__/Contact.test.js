import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";
test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("Should load button  component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
