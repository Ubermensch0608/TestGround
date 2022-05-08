import { fireEvent, render, screen } from "@testing-library/react";
import Fetch from "components/fetch/Fetch";

describe("비동기 RESTful 통신 통합 테스트", () => {
  test("화면에 fetch 버튼이 보이는 지", () => {
    render(<Fetch />);

    const buttonElement = screen.getByText(/fetch Images/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("버튼을 눌렀을 때 5000개의 리스트가 발생하는지", async () => {
    render(<Fetch />);

    const buttonElement = screen.getByText(/fetch Images/i);
    const listElements = await screen.queryAllByRole("listitem");

    expect(listElements).toHaveLength(0);

    const listElements2 = await screen.findAllByRole("listitem");
    await fireEvent.click(buttonElement);

    expect(listElements2).toHaveLength(5000);
  });
});
