import { useCounter } from "../hooks/useCounter";

export const CounterButton = ({ init = 0 }: { init?: number }) => {
  const { count, increment } = useCounter(init);

  return (
    <>
      <button onClick={increment} style={{ width: "500px" }}>
        count is {count}
      </button>
    </>
  );
};
