import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj.test.js", () => {
  test("retorno objecto debe devolver el tipo de las claves correctas", () => {
    const clave = "Kill-Lill";
    const age = 30;
    const { nombreClave, anios, latlng } = usContext(clave, age);
    const { lat, lng } = latlng;

    expect(nombreClave).toEqual(expect.any(String));
    expect(anios).toEqual(expect.any(Number));
    expect(lat).toEqual(expect.any(Number));
    expect(lng).toEqual(expect.any(Number));
  });
});
