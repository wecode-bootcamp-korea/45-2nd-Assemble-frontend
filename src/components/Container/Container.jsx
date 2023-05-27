import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Container = () => {
  return (
    <div className="Container">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
