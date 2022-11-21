import { Navbar } from "../../ui";
import { Route, Routes, Navigate } from "react-router-dom";
import { MarvelPages, DgPage, Hero, Search, ChartMap } from "../pages";
export const HeroRoutes = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages></MarvelPages>}></Route>
          <Route path="dc" element={<DgPage></DgPage>}></Route>
          <Route path="mapa" element={<ChartMap></ChartMap>}></Route>
          <Route path="search" element={<Search></Search>}>
            {" "}
          </Route>
          <Route path="hero/:id" element={<Hero></Hero>}></Route>
          <Route path="/" element={<Navigate to="/marvel"></Navigate>}>
            {" "}
          </Route>
        </Routes>
      </div>
    </>
  );
};
