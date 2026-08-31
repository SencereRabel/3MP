import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the Get started heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Get started" }),
    ).toBeInTheDocument();
  });

  test("renders the documentation section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Documentation" }),
    ).toBeInTheDocument();
  });

  test("increments the counter when clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Count is 0" });

    fireEvent.click(button);

    expect(
      screen.getByRole("button", { name: "Count is 1" }),
    ).toBeInTheDocument();
  });
});
