import { fireEvent, render, screen } from "@testing-library/react";
import NewTodo from "./NewTodo";

describe("it's about new todo test", () => {
  test("Input에 타이핑이 가능한지", async () => {
    render(<NewTodo />);
    screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hi!" },
    });

    expect(screen.getByRole("textbox")).toHaveValue("Hi!");
  });

  test("새로운 Todo 추가가 가능한지", () => {
    render(<NewTodo />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hi!" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getAllByText(/Hi!/)).toHaveLength(1);
  });
});
