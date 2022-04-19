import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useAPI from "./useAPI";

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

test("비동기 커스텀 hook 테스트", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());

  expect(result.current).toEqual({});

  await waitForNextUpdate();

  expect(result.current).toEqual({ name: "JONG" });
});
