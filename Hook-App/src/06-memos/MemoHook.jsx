import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Continue");
  }

  return `${iterationNumber} iterations`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(3);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  const [show, setshow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small value={counter}></small>
      </h1>
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        + 1
      </button>
      <button
        onClick={() => setshow(!show)}
        className="btn btn-outline-primary"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
