import React from "react";
import styled from "styled-components";

const ReserveCourtInfo = ({ courtData, timeSlot }) => {
  const { courtName, address, courtImage } = courtData;
  return (
    <BackgroundBox>
      <Title> 예약 정보</Title>
      <ReserveCourtInfoBox>
        <CourtImage src={courtImage[0]}></CourtImage>
        <CourtName>
          <SubTitle>예약장소</SubTitle>
          <p>{courtName}</p>
        </CourtName>
        <Location>
          <SubTitle>상세 주소</SubTitle>
          <p>{address}</p>
        </Location>
        <ReserveTime>
          <SubTitle>예약 시간</SubTitle>
          <p>{timeSlot}</p>
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
  width: 400px;
  height: 300px;
  margin-bottom: 15px;
  border-radius: 15px;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 250px;
  }

  @media screen and (max-width: 550px) {
    width: 250px;
    height: 200px;
  }
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
