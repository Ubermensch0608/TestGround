import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("state 증가가 예상되는 커스텀 훅", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
