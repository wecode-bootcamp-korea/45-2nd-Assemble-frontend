import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Matching from "./pages/Matching/Matching";
import ReservationStatusPage from "./pages/ReservationStatusPage/ReservationStatusPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/court" element={<ProductDetails />} />
        <Route path="/matching" element={<Matching />} />
        <Route
          path="/reservationstatuspage"
          element={<ReservationStatusPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
