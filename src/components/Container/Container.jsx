import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Container = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
