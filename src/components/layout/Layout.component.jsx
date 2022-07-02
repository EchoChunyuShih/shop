import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.component";
import Navigation from "./Navigation.component";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
