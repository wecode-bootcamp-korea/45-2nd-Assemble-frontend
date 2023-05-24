import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MatchingButton from "../../pages/Matching/components/MatchingButton";
import { usePaymentProcess } from "../Payment/usePaymentProcess";

const Card = React.forwardRef(({ item }, ref) => {
  const navigate = useNavigate();
  const { paymentProcess } = usePaymentProcess();

  const goToCourt = () => {
    navigate("/main");
  };

  return (
    <article ref={ref && ref}>
      <Container>
        <CardImgWrapper>
          <CardImg src="/images/tennis.png" alt="테니스장사진" />
        </CardImgWrapper>
        <CardInfo>
          <CardTitle onClick={goToCourt}>그리너리캠핑장</CardTitle>
          <CardLocation>
            서울시 강남구 테헤란로 427 위워크 타워 선릉 2호점 10층
          </CardLocation>
        </CardInfo>
        <CardDescription>
          <CardTimeInfo>
            <CardDate>2022년 5월 22일 월요일</CardDate>
            <CardTime>17:00 - 18:00</CardTime>
            <CardPrice>20,000원/시간</CardPrice>
          </CardTimeInfo>
          <JoinButton>
            <MatchingButton onClick={paymentProcess} color="#89B922">
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
