import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

const data = {
  data: {
    name: "bulbasaur",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female: null,
    },
  },
  isLoading: false,
  hasError: null,
};

describe("Pruuebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null,
  });

  test("Debe mostrar el componente correctamente", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getAllByText("Pokemon"));

    const nextButton = screen.getByRole("button");

    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar un pokemon", () => {
    useFetch.mockReturnValue(data);
    render(<MultipleCustomHooks />);

    expect(screen.getByText("bulbasaur")).toBeTruthy();
    expect(screen.getByText("grass")).toBeTruthy();
    expect(screen.getByText("poison")).toBeTruthy();

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
    );
    expect(alt).toBe("bulbasaur");

    const nextButton = screen.getByRole("button");

    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar a la función incrementar", () => {
    useFetch.mockReturnValue(data);

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
