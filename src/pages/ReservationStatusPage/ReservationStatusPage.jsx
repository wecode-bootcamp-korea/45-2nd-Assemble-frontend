import React from "react";
import styled from "styled-components";
import ExpireReservationCard from "../ProfilePage/components/ExpireReservationCard";

const ProfilePage = () => {
  return (
    <Container>
      <Title>예약내역</Title>
      <StatusFilterEstimate>
        <TypeEstimate>매치유형</TypeEstimate>
        <StatusEstimate>매치상태</StatusEstimate>
        <SearchEstimate>검색</SearchEstimate>
      </StatusFilterEstimate>
      <ReservationList>
        {TEST_DATA.map(item => (
          <ExpireReservationCard key={item} />
        ))}
      </ReservationList>
    </Container>
  );
};

export default ProfilePage;

const TEST_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Container = styled.div`
  padding: 40px 0px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 40px 0 20px 0;
`;

const StatusFilterEstimate = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const StatusEstimate = styled.button`
  border: 1px solid #d9d9d9;
  width: 200px;
  height: 66px;
`;

const TypeEstimate = styled(StatusEstimate)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const SearchEstimate = styled(StatusEstimate)`
  background-color: #89b922;
  color: white;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
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
