import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(3);
  return (
    <>
      <h1>CounterWithCustomHook : {counter}</h1>
      <button className="btn" onClick={() => increment(3)}>
        +1
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
