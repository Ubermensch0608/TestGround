import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App was tested", () => {
  test("renders App component", async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);
    expect(screen.queryByText(/Searched for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "JavaScript");

    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "JavaScript" },
    // });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });
});
