import { useState } from "react";

export const useCounter = (initValue = 10) => {
  const [counter, setCounter] = useState(initValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = (value) => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
