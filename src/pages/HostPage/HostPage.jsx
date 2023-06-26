import React, { useState, useEffect } from "react";
import NiceModal from "@ebay/nice-modal-react";
import styled from "styled-components";
import CourtHostCard from "./components/CourtHostCard";
import AddCourtModal from "./components/AddCourtModal";
import MyPageLayout from "../../components/Layout/MyPageLayout";
import { apiClient } from "../../utils";

const HostPage = () => {
  const [courtHostList, setCourtHostList] = useState([]);

  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  const openModal = () => {
    NiceModal.show(AddCourtModal, { fetchData });
    document.body.style.overflow = "hidden";
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0px;
`;

const Title = styled.h1`
  margin: 40px 0 20px 0;
  font-size: 32px;
`;

const ButtonPositionBox = styled.div`
  display: flex;
  justify-content: end;
`;

const AddButton = styled.button`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.green};
  border-radius: 30px;
  font-size: 12px;
  color: white;
  &:hover {
    background-color: ${props => props.theme.lightGreen};
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
