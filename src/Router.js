import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Matching from "./pages/Matching/Matching";
import ReservationStatusPage from "./pages/ReservationStatusPage/ReservationStatusPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HostPage from "./pages/HostPage/HostPage";
import ModalPromise from "./components/Payment/ModalPromise";
import PaymentSuccess from "./components/Payment/PaymentSuccess";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/court" element={<ProductDetails />} />
        <Route path="/matching" element={<Matching />} />
        <Route
          path="/reservationstatuspage"
          element={<ReservationStatusPage />}
        />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/hostpage" element={<HostPage />} />
        <Route path="/test" element={<ModalPromise />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
