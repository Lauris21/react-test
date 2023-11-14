import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Redraw");
  return (
    <button onClick={() => increment(5)} className="btn btn-primary">
      Increment
    </button>
  );
});
