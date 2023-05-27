import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Main from "./pages/Main/Main";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Reservation from "./pages/ReservationStatusPage/ReservationStatusPage";
import Matching from "./pages/Matching/Matching";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HostPage from "./pages/HostPage/HostPage";
import ModalPromise from "./components/Payment/ModalPromise";
import KakaoLogin from "./components/Login/KakaoLoginGetToken";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/court" element={<ProductDetails />} />
          <Route path="/reservationstatuspage" element={<Reservation />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/hostpage" element={<HostPage />} />
          <Route path="/test" element={<ModalPromise />} />
        </Route>
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="*" element="없는 페이지" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
