import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserBookBtn from "../../pages/Matching/components/UserBookBtn";
import MatchingButton from "../../pages/Matching/components/MatchingButton";
import { useRecoilState } from "recoil";
import { usePaymentProcess } from "../Payment/usePaymentProcess";
import { useTimeSlot } from "../../hooks/useTime";
import { matchingAtom } from "../../pages/Matching/matchingAtom";

const Card = React.forwardRef(({ item }, ref) => {
  const navigate = useNavigate();
  const { paymentProcess } = usePaymentProcess();
  const { courtInfo, timeSlot } = item;
  const { address, price, name } = courtInfo;
  const [formattedTime, formattedDate] = useTimeSlot(timeSlot);
  const [courtInfomation, setCourtInfomation] = useRecoilState(matchingAtom);

  const goToCourt = () => {
    navigate("/main");
  };

  const goToJoin = () => {
    setCourtInfomation(item);
    paymentProcess();
  };
  return (
    <article ref={ref && ref}>
      <Container>
        <CardImgWrapper>
          <CardImg src="/images/tennis.png" alt="테니스장사진" />
          <UserBtnWrapper>
            <UserBookBtn />
            <Message>상대방을 확인하세요</Message>
          </UserBtnWrapper>
        </CardImgWrapper>
        <CardInfo>
          <CardTitle onClick={goToCourt}>{name}</CardTitle>
          <CardLocation>{address}</CardLocation>
          <CardDate>{formattedDate}</CardDate>
        </CardInfo>
        <CardDescription>
          <CardTimeInfo>
            <CardTime>{formattedTime}</CardTime>
            <CardPrice>{`${price} 원/시간`}</CardPrice>
          </CardTimeInfo>
          <JoinButton>
            <MatchingButton onClick={goToJoin} color="#89B922">
              조인하기
            </MatchingButton>
          </JoinButton>
        </CardDescription>
      </Container>
    </article>
  );
});

export default Card;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    ${CardImg} {
      filter: brightness(150%);
    }
  }
`;

const CardImgWrapper = styled.div`
  width: 100%;
  flex: 1.2;
  padding-bottom: 16px;
  position: relative;
`;

const Message = styled.div`
  position: absolute;
  top: -40%;
  left: 80%;
  display: none;
  color: white;
  font-size: 12px;
  @media screen and (max-width: 950px) {
    font-size: 13px;
  }

  @media screen and (max-width: 550px) {
    font-size: 14px;
    top: -30%;
  }
`;

const UserBtnWrapper = styled.div`
  width: 25%;
  height: calc(20% * 1);
  position: absolute;
  top: 70%;
  left: 5%;
  &:hover ${Message} {
    display: inline;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;
const CardDescription = styled.div`
  flex: 1;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;
const CardLocation = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
`;

const CardTitle = styled.p`
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 900;
  &:hover {
    cursor: pointer;
  }
`;

const CardTimeInfo = styled.div`
  flex: 1;
  align-self: flex-end;
`;
const CardDate = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
  color: ${props => props.theme.grey};
`;
const CardTime = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
  color: ${props => props.theme.grey};
`;
const CardPrice = styled.p`
  font-size: ${props => props.theme.base.fontSize};
  line-height: ${props => props.theme.base.lineHeight};
  font-weight: 700;
`;

const JoinButton = styled.div`
  align-self: flex-end;
  flex: 0.5;
  text-align: right;
`;
