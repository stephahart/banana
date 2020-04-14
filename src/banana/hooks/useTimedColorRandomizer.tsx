import { useEffect, useState } from "react";

const createRandomColor = (): string =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useTimedColorRandomizer = (intervalMs: number) => {
  const [color, setColor] = useState<string>(createRandomColor());

  useEffect(() => {
    const id = setInterval(() => setColor(createRandomColor()), intervalMs);

    // Cleanup function: This will get called each time the value of intervalMs changes before this
    // use effect hook is run again.
    return (): void => clearInterval(id);
  }, [intervalMs]);

  return { color: color };
};

export default useTimedColorRandomizer;
