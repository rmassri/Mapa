import { types } from "../types/types";
export const authReduce = (state = {}, action) => {
  switch (action.types) {
    case types.login:
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    case types.logout:
      return {
        login: false,
      };
    default:
      return state;
  }
};
