export const Figure = ({ name, sprites, types }) => {
  return (
    <figure className="figure text-center">
      <h3>{name}</h3>
      <img src={sprites.front_shiny} />
      <div className="container text-center">
        <div className="row align-items-center">
          <p className="col">{types[0].type.name}</p>
          <p className="col">{types[1]?.type.name}</p>
        </div>
      </div>
    </figure>
  );
};
