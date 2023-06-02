import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileInfoCard from "./components/ProfileInfoCard";
import ExpireReservationCard from "./components/ExpireReservationCard";
import MyPageLayout from "../../components/Layout/MyPageLayout";
import { apiClient } from "../../utils";
import { API } from "../../config";

const ProfilePage = () => {
  const [profileValue, setProfileValue] = useState({
    nameValue: "",
    genderValue: "",
    levelValue: "",
  });
  const [reservationList, setReservationList] = useState([]);
  const [forReRendering, setForReRendering] = useState(false);

  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  const profileGetData = async () => {
    const profileRes = await apiClient.get(`${API.GET_USER_API}`, config);
    const profileData = profileRes.data;
    setProfileValue({
      nameValue: profileData.name,
      genderValue: profileData.gender,
      levelValue: profileData.level,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const normalHostRes = await apiClient.get(
        `${API.GET_RESERVATION_API}?isExpired=1&isMatch=0`,
        config
      );
      const normalHostData = normalHostRes.data;

      const matchHostRes = await apiClient.get(
        `${API.GET_RESERVATION_API}?isExpired=1&isMatch=1`,
        config
      );
      const matchHostData = matchHostRes.data;

      const matchGuestRes = await apiClient.get(
        `${API.GET_MATCH_API}?isExpired=1`,
        config
      );
      const matchGuestData = matchGuestRes.data;

      const matchData = [
        ...normalHostData.data,
        ...matchHostData.data,
        ...matchGuestData.data,
      ];
      const sortedData = matchData.sort(
        (a, b) =>
          new Date(b.reservation.timeSlot) - new Date(a.reservation.timeSlot)
      );
      setReservationList(sortedData);
    };
    profileGetData();
    fetchData();
    setForReRendering(false);
  }, [forReRendering]);

  return (
    <MyPageLayout>
      <Container>
        <section>
          <FirstTitle>개인정보</FirstTitle>
          <ProfileInfoBox>
            {PROFILE_INFO_DATA.map(({ id, title, name }) => {
              return (
                <ProfileInfoCard
                  key={id}
                  name={name}
                  title={title}
                  value={profileValue[name]}
                  setProfileValue={setProfileValue}
                  profileValue={profileValue}
                  setForReRendering={setForReRendering}
                />
              );
            })}
          </ProfileInfoBox>
        </section>
        <section>
          <SecondTitle>완료내역</SecondTitle>
          <CompletionList>
            {reservationList.map(item => (
              <ExpireReservationCard
                key={item.reservation.reservationId}
                timeSlot={item.reservation.timeSlot}
                paymentStatus={item.reservation.paymentStatus}
                court={item.court}
              />
            ))}
          </CompletionList>
        </section>
      </Container>
    </MyPageLayout>
  );
};

export default ProfilePage;

const PROFILE_INFO_DATA = [
  { id: 1, title: "이름", name: "nameValue" },
  { id: 2, title: "성별", name: "genderValue" },
  { id: 3, title: "실력", name: "levelValue" },
];

const Container = styled.div`
  padding: 40px 40px;
  max-width: 1280px;
  margin: 0 auto;
`;

const FirstTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 40px;
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const ProfileInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 8px;
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 150px;
    grid-row-gap: 16px;
  }
`;

const SecondTitle = styled.h1`
  font-size: 32px;
  margin: 40px 0 40px 0;
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const CompletionList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 440px;
  grid-gap: 32px;
  @media screen and (max-width: 928px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 440px;
    grid-gap: 16px;
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 440px;
    grid-gap: 8px;
  }
  @media screen and (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 440px;
    grid-row-gap: 4px;
  }
`;
