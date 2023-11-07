import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import { heroes } from "../../src/data/heroes";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes.find((item) => item.id == id));
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un error si héroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => expect(hero).toBeFalsy())
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe con id: ${id}`);
        done();
      });
  });
});
