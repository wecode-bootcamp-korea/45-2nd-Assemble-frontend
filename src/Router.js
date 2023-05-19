import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Matching from "./pages/Matching/Matching";
import Mypage from "./pages/Mypage/Mypage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/court" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
