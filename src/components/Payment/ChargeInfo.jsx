import React from "react";
import styled from "styled-components";

const ChargeInfo = () => {
  return (
    <PaymentInfo>
      <PaymentInfoTitle>요금 세부정보</PaymentInfoTitle>
      <ChargeFee>
        <PaymentDetail>
          <div>20,000원 x 2시간</div>
          <div>40,000원</div>
        </PaymentDetail>
        <PaymentDetail>
          <div>프레너미 서비스 수수료</div>
          <div>5,600원</div>
        </PaymentDetail>
        <PaymentDetail>
          <div>총 합계</div>
          <div>45,600원</div>
        </PaymentDetail>
      </ChargeFee>
    </PaymentInfo>
  );
};

export default ChargeInfo;

const PaymentInfo = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 16px;
  border-top: 1px solid ${props => props.theme.lightGray};
  border-bottom: 1px solid ${props => props.theme.lightGray};
  @media screen and (max-width: 550px) {
    padding: 10px 0;
  }
  @media screen and (max-width: 440px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

const PaymentInfoTitle = styled.div`
  font-size: ${props => props.theme.xl.fontSize};
  @media screen and (max-width: 440px) {
    font-size: ${props => props.theme.base.fontSize};
    line-height: ${props => props.theme.base.lineHeight};
    font-weight: 700;
  }
`;

const ChargeFee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
  @media screen and (max-width: 550px) {
    gap: 8px;
  }
  @media screen and (max-width: 440px) {
    gap: 2px;
  }
`;
const PaymentDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
