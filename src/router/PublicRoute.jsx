import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";
export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  console.log("Test", logged);
  return !logged ? children : <Navigate to="/marvel"></Navigate>;
};
