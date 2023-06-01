import React, { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import useBodyOverflow from "../../../hooks/useBodyOverflow";
import MatchingButton from "../../Matching/components/MatchingButton";
import CardForModal from "../../../components/Card/CardForModal";
import ProductChargeInfo from "../../../components/Payment/ProductChargeInfo";
import { fadeIn, fadeOut } from "../../Matching/components/animation";
import { loadTossPayments } from "@tosspayments/payment-sdk";

const { v4: uuidv4 } = require("uuid");

const clientKey = process.env.REACT_APP_CLIENTKEY;

export default NiceModal.create(({ reserveData, courtData }) => {
  useBodyOverflow("hidden");
  const modal = useModal();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { price, amount, timeSlot, isMatch, courtName, courtId } = reserveData;
  const { easyPay } = paymentMethod;

  const closedModal = () => {
    modal.remove();
  };
  const orderId = uuidv4();
  const paymentInformation = {
    amount: amount,
    orderId: orderId,
    orderName: courtName,
    successUrl: `http://localhost:3000/success?courtId=${courtId}&isMatch=${isMatch}&amount=${amount}&timeSlot=${encodeURIComponent(
      timeSlot
    )}`,
    failUrl: "http://localhost:3000/fail",
    flowMode: "DIRECT",
    easyPay: easyPay,
  };

  const handleResolve = () => {
    if (!paymentMethod) {
      alert("결제 방식을 선택해 주세요!");
    } else {
      modal.resolve();
    }

    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestPayment("카드", paymentInformation)
        .catch(function (error) {
          if (error.code === "USER_CANCEL") {
            console.log("USER_CANCEL");
          } else if (error.code === "INVALID_CARD_COMPANY") {
            console.log("INVALID_CARD_COMPANY");
          }
        });
    });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setPaymentMethod(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container visible={modal.visible}>
      <Content>
        <PrevButton onClick={closedModal}>X</PrevButton>
        <Title>확인 및 결제</Title>
        <Location>
          <CardForModal courtInfo={courtData} timeSlot={timeSlot} />
        </Location>
        <ProductChargeInfo price={Number(price)} isMatch={isMatch} />
        <PaymentMethodContainer>
          <PaymentMethodTitle>결제 수단</PaymentMethodTitle>
          <PaymentMethods>
            <PaymentMethod>
              <PaymentMethodRadio
                type="radio"
                name="easyPay"
                value="토스페이"
                onChange={handleChange}
              />
              토스페이
            </PaymentMethod>
            <PaymentMethod>
              <PaymentMethodRadio
                type="radio"
                readOnly
                name="easyPay"
                value="가상계좌"
                onChange={handleChange}
              />
              가상계좌
            </PaymentMethod>
          </PaymentMethods>
          <Conditions>
            아래 버튼을 선택하면 프레너미 재예약 및 환불 정책에 동의하는
            것입니다.
          </Conditions>
        </PaymentMethodContainer>
        <ConfirmButtons>
          <MatchingButton onClick={closedModal} color="white">
            취소
          </MatchingButton>
          <MatchingButton onClick={handleResolve} color="#89B922">
            확인
          </MatchingButton>
        </ConfirmButtons>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => (props.visible ? "flex" : "none")};
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: translateY(${props => (props.visible ? "0" : "10%")});
  background-color: rgba(40, 40, 40, 0.8);
  transition: opacity 0.7s ease, transform 0.7s ease;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 1s ease;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 700px;
  background-color: #f1f1f1;
  padding: 24px;
  border-radius: 16px;

  @media screen and (max-width: 550px) {
    width: 400px;
    height: 570px;
    padding: 16px;
  }

  @media screen and (max-width: 440px) {
    width: 380px;
    height: 480px;
    gap: 0;
    padding: 8px;
  }
`;

const PrevButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.lightGray};
  width: 30px;
  font-size: ${props => props.theme.sm.fontSize};
  background-color: white;
`;
const Title = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
  text-align: center;
  padding-bottom: 36px;
  font-weight: 900;
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.xl.fontSize};
    padding-bottom: 30px;
  }

  @media screen and (max-width: 440px) {
    padding-bottom: 12px;
  }
`;

const Location = styled.div`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 20px;
  @media screen and (max-width: 440px) {
    padding-bottom: 8px;
  }
`;

const ConfirmButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const PaymentMethodContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 28px;
  @media screen and (max-width: 550px) {
    gap: 16px;
    padding-top: 12px;
  }
  @media screen and (max-width: 440px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;
const PaymentMethodTitle = styled.div`
  font-size: ${props => props.theme.xl.fontSize};
  @media screen and (max-width: 440px) {
    font-size: ${props => props.theme.base.fontSize};
    line-height: ${props => props.theme.base.lineHeight};
    font-weight: 700;
  }
`;
const PaymentMethods = styled.div`
  display: flex;
  gap: 16px;
`;

const PaymentMethodRadio = styled.input`
  cursor: pointer;
`;

const PaymentMethod = styled.label`
  font-size: ${props => props.theme.sm.fontSize};
`;
const Conditions = styled.div`
  margin-bottom: 10px;
  font-size: ${props => props.theme.xs.fontSize};
  color: ${props => props.theme.gray};

  @media screen and (max-width: 550px) {
    padding: 14px 0;
  }

  @media screen and (max-width: 440px) {
    padding: 4px 0 0 0;
  }
`;
