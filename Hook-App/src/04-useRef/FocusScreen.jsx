import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onHandleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="write your name"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={onHandleClick}>
        Set Focus
      </button>
    </>
  );
};
