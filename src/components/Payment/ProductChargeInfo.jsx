import React from "react";
import styled from "styled-components";

const ProductChargeInfo = ({ price, isMatch }) => {
  const priceN = Number(price);
  const isMatchN = Number(isMatch);
  const SERVICE_FEE = priceN * 0.14;
  const SUBTOTAL = priceN + SERVICE_FEE;
  const MATCHED_FEE = priceN / 2;
  const MATCHED_SERVICE_FEE = MATCHED_FEE * 0.14;
  const MATCHED_TOTAL = (priceN / 2) * 1.14;

  return (
    <PaymentInfo>
      <PaymentInfoTitle successPage>요금 세부정보</PaymentInfoTitle>
      <ChargeFee>
        <PaymentDetail>
          <div>기본 결제 금액</div>
          <div>{`${priceN.toLocaleString()} 원`}</div>
        </PaymentDetail>
        {isMatchN === 1 ? (
          <PaymentDetail>
            <div>파트너와 더치페이 금액</div>
            <div>{`${MATCHED_FEE.toLocaleString()} 원`}</div>
          </PaymentDetail>
        ) : (
          ""
        )}
        <PaymentDetail>
          <div>프레너미 서비스 수수료</div>
          <div>
            {isMatchN === 1
              ? `${MATCHED_SERVICE_FEE.toLocaleString()} 원`
              : `${SERVICE_FEE.toLocaleString()} 원`}
          </div>
        </PaymentDetail>
        <PaymentDetail>
          <div>총 합계</div>
          {isMatchN === 1 ? (
            <div>{`${MATCHED_TOTAL.toLocaleString()} 원`}</div>
          ) : (
            <div>{`${SUBTOTAL.toLocaleString()} 원`}</div>
          )}
        </PaymentDetail>
      </ChargeFee>
    </PaymentInfo>
  );
};

export default ProductChargeInfo;

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
  font-size: ${props =>
    props.successPage ? props.theme.base.fontSize : props.theme.xl.fontSize};

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
