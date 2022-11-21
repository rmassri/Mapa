import { Route, Routes } from "react-router-dom";
import { HeroRoutes } from "../heroes/routes/HeroRoutes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage> </LoginPage>}></Route>
              </Routes>
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroRoutes></HeroRoutes>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
