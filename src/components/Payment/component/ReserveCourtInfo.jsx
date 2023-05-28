import React from "react";
import styled from "styled-components";

const ReserveCourtInfo = () => {
  return (
    <BackgroundBox>
      <Title> 예약 정보</Title>
      <ReserveCourtInfoBox>
        <CourtImage src="/images/ProductDetail/image1.jpg"></CourtImage>
        <CourtName>
          <SubTitle>예약장소</SubTitle>
          <p>그리너리 테니스장</p>
        </CourtName>
        <Location>
          <SubTitle>상세 주소</SubTitle>
          <p>서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)</p>
        </Location>
        <ReserveTime>
          <SubTitle>예약 시간</SubTitle>
          <p>2023년 05월 22일 15:00 - 16:00</p>
        </ReserveTime>
      </ReserveCourtInfoBox>
    </BackgroundBox>
  );
};
export default ReserveCourtInfo;

const BackgroundBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;
const ReserveCourtInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
`;
const CourtImage = styled.img`
  width: 50%;
  height: 80%;
  margin-bottom: 15px;
`;
const Title = styled.p`
  font-size: ${props => props.theme.lg.fontSize};
`;
const CourtName = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;
const Location = styled(CourtName)``;

const ReserveTime = styled.div`
  font-size: 12px;
`;

const SubTitle = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  margin-bottom: 10px;
`;
