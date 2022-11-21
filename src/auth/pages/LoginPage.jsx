import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  console.log({ login });
  const navigater = useNavigate();
  const onLogin = () => {
    login("Richard Massri");
    navigater("/", {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1> Login </h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
