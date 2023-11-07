import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe retornar una url de una imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  test("getImagen debe retornar un error si no trae la imagen", async () => {
    const res = await getImagen();
    expect(res).toBe("No se encontró ninguna imagen");
  });
});
