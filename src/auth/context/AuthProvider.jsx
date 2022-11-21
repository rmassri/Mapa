import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReduce } from "./AuthReduce";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReduce, {}, init);

  const login = (name = "") => {
    const user = {
      id: "ABC",
      name: name,
    };
    const action = {
      types: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    const action = {
      types: types.login,
    };
    localStorage.removeItem("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login: login, ...authState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
