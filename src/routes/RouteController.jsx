import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import Project from "./project/Project";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
const RouteController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteController;
