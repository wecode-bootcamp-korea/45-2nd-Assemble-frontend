import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ReserveCourtInfo from "./component/ReserveCourtInfo";
import ProductChargeInfo from "./ProductChargeInfo";
import SuccessPageButton from "./component/SuccessPageButton";


const PaymentSuccess = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);

  if (!data.courtId) return;

  return (
    <PageBackground>
      <PaymentSuccessInfo>
        <Title>결제가 완료되었습니다.</Title>
        <Thanks>이용해 주셔서 감사합니다.</Thanks>
        <ReserveCourtInfo courtData={data}
         />
        <ProductChargeInfo courtData={data} />
        <SuccessPageButton
         courtData={data}
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
