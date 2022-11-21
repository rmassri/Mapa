import { heroes } from "../data/hero";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} no existe`);
  }
  return heroes.filter((data) => data.publisher === publisher);
};
