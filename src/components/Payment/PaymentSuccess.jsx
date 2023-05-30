import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ReserveCourtInfo from "./component/ReserveCourtInfo";
import ChargeInfo from "./ChargeInfo";
import SuccessPageButton from "./component/SuccessPageButton";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [postButtonOn, setPostButtonOn] = useState(false);
  const isMatched = false;
  const API_ADDRESS = "";
  const accessToken = "";
  const dataURL = "data/courtData.json";

  const [courtData, setCourtData] = useState(null);
  useEffect(() => {
    axios.get(dataURL).then(response => {
      setCourtData(response.data);
    });
  }, []);

  if (postButtonOn) {
    // axios
    //   .post(
    //     `${API_ADDRESS}/reservations`,
    //     { headers: { Authorization: accessToken } },
    //     {
    //       courtId: "",
    //       timeSlot: "",
    //       isMatch: "",
    //       amount: "",
    //     }
    //   )
    //   .then(response => {
    //     console.log(response);
    //   });

    navigate(isMatched ? "/reservationstatuspage" : "/");
  }

  if (!courtData) return;

  return (
    <PageBackground>
      <PaymentSuccessInfo>
        <Title>결제가 완료되었습니다.</Title>
        <Thanks>이용해 주셔서 감사합니다.</Thanks>
        <ReserveCourtInfo courtData={courtData} />
        <ChargeInfo successPage />
        <SuccessPageButton
          isMatched={isMatched}
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
