import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderOne } from "../components/HeaderOne";
import { CoverPic } from "../components/CoverPic";

export const HomePage = () => {
  return (
    <>
      <HeaderOne />
      <CoverPic />
      <Link to="/guanacaste">Guanacaste</Link>
      <Link to="/jaco">Jacó</Link>
      <Outlet />
    </>
  );
};

export default HomePage;
