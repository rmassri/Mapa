import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? isActive : null}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? isActive : null}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? isActive : null}`
            }
            to="/search"
          >
            Search
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? isActive : null}`
            }
            to="/mapa"
          >
            Mapa
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary"> {user?.name} </span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            {" "}
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};