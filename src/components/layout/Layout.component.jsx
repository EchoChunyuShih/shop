import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.component";
import Navigator from "./Navigator.component";

const Layout = () => {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
