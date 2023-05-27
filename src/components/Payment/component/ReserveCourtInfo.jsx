import React from "react";
import styled from "styled-components";

const ReserveCourtInfo = () => {
  return (
    <BackgroundBox>
      <Title> 예약 정보</Title>
      <ReserveCourtInfoBox>
        <CourtImage src="/images/ProductDetail/image1.jpg"></CourtImage>
        <CourtName>
          <p>예약장소</p>
          <p>그리너리 테니스장</p>
        </CourtName>
        <Location>
          <p>상세 주소</p>
          <p>서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)</p>
        </Location>
        <ReserveTime>
          <p>예약 시간</p>
          <p>2023년 05월 22일 15:00 - 16:00</p>
        </ReserveTime>
      </ReserveCourtInfoBox>
    </BackgroundBox>
  );
};
export default ReserveCourtInfo;

const BackgroundBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const ReserveCourtInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
  box-sizing: border-box;
`;
const CourtImage = styled.img`
  width: 50%;
  height: 100%;
`;
const Title = styled.p`
  font-size: ${props => props.theme.lg.fontSize};
`;
const CourtName = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;
const Location = styled(CourtName)``;

const ReserveTime = styled.div`
  font-size: 12px;
`;
