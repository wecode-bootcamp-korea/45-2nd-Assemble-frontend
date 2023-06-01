import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useToken } from "../../service/query/useToken";
import { useMutatePayment } from "../../service/mutation/useMutatePayment";

const PaymentInProgress = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const courtId = searchParams.get("courtId");
  const amount = searchParams.get("amount");
  const paymentKey = searchParams.get("paymentKey");
  const isMatch = searchParams.get("isMatch");
  const orderId = searchParams.get("orderId");
  const timeSlot = searchParams.get("timeSlot");
  const matchId = searchParams.get("matchId");
  const { data: accessToken } = useToken();
  const { mutateAsync } = useMutatePayment();

  useEffect(() => {
    if (!accessToken) return;
    const paymentDetails = {
      amount: amount,
      matchId: matchId,
      paymentKey: paymentKey,
      orderId: orderId,
    };

    const paymentReserveDetails = {
      courtId: courtId,
      amount: amount,
      isMatch: isMatch,
      paymentKey: paymentKey,
      orderId: orderId,
      timeSlot: "2023-05-23 11:00:00",
    };

    const Token = localStorage.getItem("accessToken");
    const completePayment = async () => {
      // const res = await mutateAsync(paymentDetails);
      await axios.post(
        `${process.env.REACT_APP_API_URL}/reservations`,
        paymentReserveDetails,
        { headers: { Authorization: Token } }
      );
      // navigate("/paymentSuccess", { state: paymentReserveDetails });
    };
    completePayment();
  }, [accessToken, mutateAsync]);
  return (
    <Container>
      <Logo src="/images/logo2.png" />
      <Title>결제 진행 중입니다...</Title>
    </Container>
  );
};

export default PaymentInProgress;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 260px 0;
  gap: 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
`;
