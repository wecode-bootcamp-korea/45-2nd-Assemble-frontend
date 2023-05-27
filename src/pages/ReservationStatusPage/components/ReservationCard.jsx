import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FilterMatching from "../components/FilterMatching";
import ProfileBookBtn from "../../../components/ProfileBookBtn/ProfileBookBtn";

const ReservationCard = ({ host, guest, court, reservation }) => {
  const { name, address, price, id, courtImage } = court;
  const { paymentStatus, isMatch, timeSlot } = reservation;
  const navigate = useNavigate();

  const date = new Date(timeSlot);
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = weekdays[date.getDay()];
  const formattedDate = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;

  const startTime = timeSlot.slice(11, 16);
  const endTime = new Date(timeSlot);
  endTime.setHours(endTime.getHours() + 1);
  const formattedTime = `${startTime} ~ ${endTime
    .getHours()
    .toString()
    .padStart(2, "0")}:00`;

  const goToCourt = () => {
    navigate(`/court/courtId${id}`);
  };

  return (
    <Container onClick={goToCourt}>
      <CardImgWrapper>
        {isMatch ? (
          <FilterMatching paymentStatus={paymentStatus} guest={guest} />
        ) : (
          <LabelNomal>일반</LabelNomal>
        )}
        <CardImg src={courtImage} alt="테니스장사진" />
        {isMatch === 1 && paymentStatus === "complete" ? (
          <ProfileBookBtn host={host} guest={guest} />
        ) : (
          <div />
        )}
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardLocation>{address}</CardLocation>
        <CardDate>{formattedDate}</CardDate>
      </CardInfo>
      <CardDescription>
        <CardTimeInfo>
          <CardTime>{formattedTime}</CardTime>
          <CardPrice>{price.toLocaleString()} 원/시간</CardPrice>
        </CardTimeInfo>
      </CardDescription>
    </Container>
  );
};

export default ReservationCard;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  &:hover {
    cursor: pointer;
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
`;

const CardTimeInfo = styled.div`
  flex: 1;
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

const LabelBase = styled.div`
  z-index: 9999;
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: 1px solid black;
  color: white;
  position: absolute;
  top: 10px;
  left: -15px;
  padding: 10px;
  text-align: center;
`;

const LabelNomal = styled(LabelBase)`
  background-color: ${props => props.theme.green};
`;
