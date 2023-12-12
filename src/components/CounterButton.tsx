import { useCounter } from "../hooks/useCounter";

export const CounterButton = ({ init = 0 }: { init?: number }) => {
  const { count, increment } = useCounter(init);

  return (
    <>
      <button onClick={increment}>count is {count}</button>
    </>
  );
};
