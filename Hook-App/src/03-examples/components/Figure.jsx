import { useLayoutEffect, useRef, useState } from "react";

export const Figure = ({ name, sprites, types }) => {
  const h3Ref = useRef();

  const [boxSize, setboxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    console.log(h3Ref.current.getBoundingClientRect());
    const { width, height } = h3Ref.current.getBoundingClientRect();

    setboxSize({
      width,
      height,
    });
  }, []);

  return (
    <>
      <figure className="figure text-center" style={{ display: "flex" }}>
        <h3 ref={h3Ref}>{name}</h3>
        <img src={sprites.front_shiny} />
        <div className="container text-center">
          <div className="row align-items-center">
            <p className="col">{types[0].type.name}</p>
            <p className="col">{types[1]?.type.name}</p>
          </div>
        </div>
      </figure>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
