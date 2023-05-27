import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./components/Login/kakaoLogin";
import KakaoLogin from "./components/Login/KakaoLoginGetToken";
import Matching from "./pages/Matching/Matching";
import ReservationStatusPage from "./pages/ReservationStatusPage/ReservationStatusPage";
import ProfilePage from "./pages/Mypage/ProfilePage";
import HostPage from "./pages/HostPage/HostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/court" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route
          path="/reservationstatuspage"
          element={<ReservationStatusPage />}
        />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/hostpage" element={<HostPage />} />
        <Route path="*" element="없는 페이지~" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
