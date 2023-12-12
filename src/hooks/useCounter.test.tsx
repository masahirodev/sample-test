import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("初期値０が正しく設定されている", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);
  });

  it("初期値１が正しく設定されている", () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
  });

  it("incrementが実行されると、値が0→1に変化する", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current.count).toBe(0);

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
