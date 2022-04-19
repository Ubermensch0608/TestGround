import {
  findAllByRole,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import App from "App";
import axios from "axios";

describe("App.js 유닛 테스트", () => {
  test("fetch버튼이 있는지", () => {
    // 테스트하고자 하는 컴포넌트 렌더링
    render(<App />);

    // 테스트 할 대상 지정 - getByRole(요소의 역할에 따른 지정)
    const fetchButton = screen.getByRole("button");
    // fetchButton이 DOM에 있는 것을 가정
    expect(fetchButton).toBeInTheDocument();
  });

  // RTL은 유저가 실제 보는 결과를 테스트하는 것에 초점을 맞추므로,
  // 버튼을 누르고 데이터 리스트가 렌더링 되는지 확인
  test("fetch버튼을 누를 수 있는지", () => {
    render(<App />);

    const fetchButton = screen.getByRole("button");
    fireEvent.click(fetchButton);
  });

  test("데이터가 렌더링 되는지", async () => {
    render(<App />);

    screen.debug();
    const fetchButton = await screen.getByRole("button");
    await fireEvent.click(fetchButton);
    await screen.debug();
  });
});
