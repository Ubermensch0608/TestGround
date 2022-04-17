import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTodo from "./NewTodo";

describe("it's about new todo test", () => {
  test("render NewTodo Component", async () => {
    render(<NewTodo />);

    screen.debug();

    await fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hi!" },
    });

    await userEvent.click(screen.getByRole("button"));

    const item = await screen.findByRole("paragraph");
    expect(item).toHaveLength(3);
  });
});
