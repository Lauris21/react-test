import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("07-deses-arr", () => {
  test("retorna arreglo debe retornar un arreglo de string y números", () => {
    const [letters, number] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(number).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof number).toBe("number");

    // Le decimos que espera cualquier tipo de string
    expect(letters).toEqual(expect.any(String));
  });
});
