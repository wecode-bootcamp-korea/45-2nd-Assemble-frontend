import React, { useState, useEffect } from "react";
import NiceModal from "@ebay/nice-modal-react";
import styled from "styled-components";
import CourtHostCard from "./components/CourtHostCard";
import AddCourtModal from "./components/AddCourtModal";
import { apiClient } from "../../utils";
import MyPageLayout from "../../components/Layout/MyPageLayout";
const HostPage = () => {
  const [courtHostList, setCourtHostList] = useState([]);

  const openModal = () => {
    NiceModal.show(AddCourtModal, { fetchData });
    document.body.style.overflow = "hidden";
  };

  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  const fetchData = async () => {
    const hostRes = await apiClient.get(
      "http://10.58.52.234:3000/courts/hosting",
      config
    );
    const hostData = hostRes.data;
    setCourtHostList(hostData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyPageLayout>
      <Container>
        <Title>호스팅 내역</Title>
        <ButtonPositionBox>
          <AddButton onClick={openModal}>등록하기</AddButton>
        </ButtonPositionBox>
        <ReservationList>
          {courtHostList.map(item => (
            <CourtHostCard key={item.courtId} {...item} />
          ))}
        </ReservationList>
      </Container>
    </MyPageLayout>
  );
};

export default HostPage;

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
  grid-auto-rows: 350px;
  @media screen and (max-width: 1128px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 350px;
  }
  @media screen and (max-width: 842px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 350px;
  }
  @media screen and (max-width: 556px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 350px;
  }
`;
