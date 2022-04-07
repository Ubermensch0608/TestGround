import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App was tested", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    screen.debug();
  });
});
