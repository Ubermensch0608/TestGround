import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";
import { RecoilRoot } from "recoil";

test("test", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  const increButtonElement = screen.getByLabelText("increment");
  const decreButtonElement = screen.getByLabelText("decrement");
  const divElement = screen.getByRole("contentinfo");

  expect(divElement).toHaveTextContent("Count is 0");

  fireEvent.click(increButtonElement);

  expect(divElement).toHaveTextContent("Count is 1");

  fireEvent.click(decreButtonElement);

  expect(divElement).toHaveTextContent("Count is 0");
});
