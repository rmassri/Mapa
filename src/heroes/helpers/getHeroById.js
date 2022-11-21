import { heroes } from "../data/hero";
export const getHeroById = (id) => {
  return heroes.find((element) => element.id == id);
};
