import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  useEffect(() => {}, [increment]);

  // const increment = (value) => {
  //   setCounter(counter + value);
  // };

  return (
    <>
      <h1>useCallBack Hook : {counter}</h1>

      <ShowIncrement increment={increment} />
    </>
  );
};
