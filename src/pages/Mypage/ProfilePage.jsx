import React from "react";
import styled from "styled-components";
import ProfileInfoCard from "./components/ProfileInfoCard";
import CardEstimate from "../../components/CardEstimate/CardEstimate";

const ProfilePage = () => {
  return (
    <Container>
      <section>
        <FirstTitle>개인정보</FirstTitle>
        <ProfileInfoBox>
          {PROFILE_INFO_DATA.map(item => (
            <ProfileInfoCard key={item.id} {...item} />
          ))}
        </ProfileInfoBox>
      </section>
      <section>
        <SecondTitle>완료내역</SecondTitle>
        <CompletionList>
          {TEST_DATA.map(item => (
            <CardEstimate key={item} />
          ))}
        </CompletionList>
      </section>
    </Container>
  );
};

export default ProfilePage;

const TEST_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PROFILE_INFO_DATA = [
  { id: 1, title: "이름", value: "하지현" },
  { id: 2, title: "이메일", value: "hajihyun@gmail.com" },
  { id: 3, title: "성별", value: "여" },
  { id: 4, title: "실력", value: 2 },
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
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 16px;
  @media screen and (max-width: 1128px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 8px;
  }
  @media screen and (max-width: 842px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 4px;
  }
  @media screen and (max-width: 556px) {
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
  grid-auto-rows: 300px;
  grid-gap: 16px;
  @media screen and (max-width: 1128px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 3000px;
    grid-gap: 8px;
  }
  @media screen and (max-width: 842px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 300px;
    grid-gap: 4px;
  }
  @media screen and (max-width: 556px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 300px;
    grid-row-gap: 16px;
  }
`;
