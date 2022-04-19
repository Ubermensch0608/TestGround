import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("hook 테스트", () => {
  const onclick = jest.fn();
  render(<Counter />);

  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Add One");
  expect(divElement).toHaveTextContent("Count is 0");

  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent("Count is 1");
});
