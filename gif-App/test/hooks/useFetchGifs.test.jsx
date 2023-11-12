import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado actual", () => {
    const { result } = renderHook(() => useFetchGifs("cats"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy;
  });

  test("Debe regresar un array de images e isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("cats"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
