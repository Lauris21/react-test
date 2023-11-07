import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { heroes as dataHeroes } from "../../src/data/heroes";

describe("Pruebas en 08-imp- exp", () => {
  test("getHeroeById debe retornar un héroe por ID", () => {
    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefine sino existe", () => {
    const id = 100;

    const hero = getHeroeById(id);

    // que tenga valor negativo o falso
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual(dataHeroes.filter((hero) => hero.owner === owner));

    expect(heroes.length).toBe(3);
  });

  test("getHeroesByOwner debe retornar un array con los héroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual(dataHeroes.filter((hero) => hero.owner === owner));
    expect(heroes.length).toBe(2);
  });
});
