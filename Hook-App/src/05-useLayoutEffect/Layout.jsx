import { useCounter, useFetch } from "../hooks";
import { Figure, IsLoading } from "../03-examples/components";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const { name, types, sprites } = !!data && data;

  return (
    <>
      <h1>Pokemon</h1>

      {isLoading ? (
        <IsLoading />
      ) : (
        <Figure name={name} sprites={sprites} types={types} />
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next
      </button>
    </>
  );
};
