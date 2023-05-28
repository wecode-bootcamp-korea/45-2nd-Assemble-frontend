import React from "react";
import styled from "styled-components";
import ReserveCourtInfoBox from "./component/ReserveCourtInfo";
import ChargeInfo from "./ChargeInfo";
import SuccessPageButton from "./component/SuccessPageButton";
const PaymentSuccess = () => {
  const isMatched = false;

  return (
    <PageBackground>
      <PaymentSuccessInfo>
        <Title>결제가 완료되었습니다.</Title>
        <Thanks>이용해 주셔서 감사합니다.</Thanks>
        <ReserveCourtInfoBox />
        <ChargeInfo successPage={true} />
        <SuccessPageButton isMatched={isMatched} />
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
  padding: 2%;
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
