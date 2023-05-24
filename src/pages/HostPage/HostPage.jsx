import React from "react";
import styled from "styled-components";
import ExpireReservationCard from "../ProfilePage/components/ExpireReservationCard";

const ProfilePage = () => {
  return (
    <Container>
      <Title>호스팅 내역</Title>
      <ButtonPositionBox>
        <AddButton>등록하기</AddButton>
      </ButtonPositionBox>
      <ReservationList>
        {TEST_DATA.map(item => (
          <ExpireReservationCard key={item} />
        ))}
      </ReservationList>
    </Container>
  );
};

export default ProfilePage;

const TEST_DATA = [1, 2, 3, 4, 5];

const Container = styled.div`
  padding: 40px 0px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 40px 0 20px 0;
`;

const ButtonPositionBox = styled.div`
  display: flex;
  justify-content: end;
`;

const AddButton = styled.button`
  background-color: #89b922;
  color: white;
  margin-bottom: 20px;
  width: 100px;
  border-radius: 30px;
  height: 50px;
  font-size: 12px;
  &:hover {
    background-color: #a1db26;
  }
`;

const ReservationList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 16px;
  @media screen and (max-width: 1128px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 400px;
    grid-gap: 8px;
  }
  @media screen and (max-width: 842px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 400px;
    grid-gap: 4px;
  }
  @media screen and (max-width: 556px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 400px;
    grid-row-gap: 16px;
  }
`;
