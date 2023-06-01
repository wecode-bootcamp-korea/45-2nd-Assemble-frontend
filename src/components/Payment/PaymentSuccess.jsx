import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ReserveCourtInfo from "./component/ReserveCourtInfo";
import ProductChargeInfo from "./ProductChargeInfo";
import SuccessPageButton from "./component/SuccessPageButton";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [reserveData, setReserveData] = useState(location.state);
  const { isMatch, timeSlot, courtId } = reserveData; //paymentinprogress에서 state로 받기
  const [postButtonOn, setPostButtonOn] = useState(false);
  const [courtData, setCourtData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/courts?courtId=${courtId}`)
      .then(response => {
        setCourtData(response.data);
      });
  }, []);

  if (postButtonOn) {
    navigate(isMatch ? "/reservationstatuspage" : "/");
  }
  console.log("courtData", courtData[0]);

  if (!courtData[0]) return console.log("nono");
  return (
    <PageBackground>
      <PaymentSuccessInfo>
        <Title>결제가 완료되었습니다.</Title>
        <Thanks>이용해 주셔서 감사합니다.</Thanks>
        <ReserveCourtInfo courtData={courtData[0]} timeSlot={timeSlot} />
        <ProductChargeInfo isMatch={isMatch} price={courtData[0].price} />
        <SuccessPageButton
          isMatch={isMatch}
          postButtonOn={postButtonOn}
          setPostButtonOn={setPostButtonOn}
        />
      </PaymentSuccessInfo>
    </PageBackground>
  );
};
export default PaymentSuccess;

const PageBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2% 0;
`;

const PaymentSuccessInfo = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 550px) {
    width: 60%;
  }

  @media screen and (max-width: 360px) {
    width: 70%;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.xl.fontSize};
  margin: 2%;
`;

const Thanks = styled.p`
  margin: 0.5% 1% 4% 1%;
  font-size: ${props => props.theme.sm.fontSize};
`;
