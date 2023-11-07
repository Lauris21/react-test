import { heroes } from "../data/heroes";

// console.log( owners );

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );
