import { useState } from "react";

export const useCounter = (init: number) => {
  const [count, setCount] = useState<number>(init || 0);

  const increment = () => setCount((count: number) => count + 1);

  return { count, increment };
};
