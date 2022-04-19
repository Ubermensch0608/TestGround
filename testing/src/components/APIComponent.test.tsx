import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import APIComponent from "./APIComponent";

// msw 세팅
const server = setupServer(
  // 가상 rest api
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "JONG" }));
  })
);

// life cycle
// 시작 전 서버를 열고,
// 매번 테스트가 끝날 때마다 이벤트 핸들러 없애고 => side effect방지
// 끝날 때 서버 닫고
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("data 불러오기 테스트", async () => {
  render(<APIComponent />);

  const out = await waitFor(() => screen.getByRole("contentinfo"));

  expect(out).toHaveTextContent("Name is JONG");
});
