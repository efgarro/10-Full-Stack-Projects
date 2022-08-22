import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderTwo } from "../components/HeaderTwo";

export const HubPage = () => {
  return (
    <>
      <HeaderTwo />;
      <Outlet />
    </>
  );
};

export default HubPage;
