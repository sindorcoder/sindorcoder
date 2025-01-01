import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import { useEffect } from "react";
const RouteController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouteController;
