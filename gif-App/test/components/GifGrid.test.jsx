import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
const category = "cat";

describe("Pruebas en <GifGrid />", () => {
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  });
  test("Debe mostrar el loading al iniciarse", () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando...")).toBeTruthy;
    expect(screen.getByText(category)).toBeTruthy;
  });

  test("Debe mostrar items cuando se cargan las imagenes con useFetchGifs", () => {
    const dataMock = [
      {
        id: "ABV",
        title: "Probando 1",
        url: "https://localhost.probando.jpg",
      },
      {
        id: "ABC",
        title: "Probando 2",
        url: "https://localhost.probando2.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: dataMock,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
