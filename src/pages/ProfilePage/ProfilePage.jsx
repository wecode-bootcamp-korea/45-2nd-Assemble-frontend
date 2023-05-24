import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileInfoCard from "./components/ProfileInfoCard";
import ExpireReservationCard from "./components/ExpireReservationCard";

const ProfilePage = () => {
  const [profileValue, setProfileValue] = useState({
    nameValue: "",
    genderValue: "",
    levelValue: "",
  });
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profileRes = await fetch("/data/profileData.json");
      const profileData = await profileRes.json();
      setProfileValue({
        nameValue: profileData[0].userName,
        genderValue: profileData[0].userGender,
        levelValue: profileData[0].userLevel,
      });
      const matchHostRes = await fetch("/data/expireMatchHostData.json");
      const matchHostData = await matchHostRes.json();
      const matchGuestRes = await fetch("/data/expireMatchGuestData.json");
      const matchGuestData = await matchGuestRes.json();
      const matchData = [...matchHostData, ...matchGuestData];
      const sortedData = matchData.sort(
        (a, b) => new Date(a.timeslot) - new Date(b.timeslot)
      );
      setReservationList(sortedData);
    };
    fetchData();
  }, []);

  return (
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
              />
            );
          })}
        </ProfileInfoBox>
      </section>
      <section>
        <SecondTitle>완료내역</SecondTitle>
        <CompletionList>
          {reservationList.map(item => (
            <ExpireReservationCard key={item.reservationId} />
          ))}
        </CompletionList>
      </section>
    </Container>
  );
};

export default ProfilePage;

const PROFILE_INFO_DATA = [
  { id: 1, title: "이름", name: "nameValue" },
  { id: 3, title: "성별", name: "genderValue" },
  { id: 4, title: "실력", name: "levelValue" },
];

const Container = styled.div`
  padding: 40px 0px;
  max-width: 1280px;
  margin: 0 auto;
`;

const FirstTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ProfileInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 8px;
  @media screen and (max-width: 852px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 4px;
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 150px;
    grid-row-gap: 16px;
  }
`;

const SecondTitle = styled.h1`
  font-size: 32px;
  margin: 40px 0 20px 0;
`;

const CompletionList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 460px;
  grid-gap: 16px;
  @media screen and (max-width: 928px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 460px;
    grid-gap: 8px;
  }
  @media screen and (max-width: 628px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 460px;
    grid-gap: 4px;
  }
  @media screen and (max-width: 328px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 460px;
    grid-row-gap: 16px;
  }
`;
