import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // Objetos apuntan a valor de memoria diferente entonces utilizamos toEqual o toStrictEqual

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Laura";
    const userActivo = getUsuarioActivo(name);

    expect(userActivo).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
