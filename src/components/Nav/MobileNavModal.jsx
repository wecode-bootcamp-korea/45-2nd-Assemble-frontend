import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import MatchingButton from "../../pages/Matching/components/MatchingButton";
import styled from "styled-components";

export default NiceModal.create(() => {
  const modal = useModal();
  const closedModal = () => {
    modal.remove();
    document.body.style.overflow = "unset";
  };
  return (
    <Container>
      <Header>
        <ClosedButton onClick={closedModal}>X</ClosedButton>
      </Header>
      <Wrapper>
        <Location>
          <Title>지역을 알려주세요</Title>
          <Search>
            <Magnify src="/images/search.png" alt="magnify" />
            <Placeholder>코트장 검색</Placeholder>
          </Search>
          <Regions>
            <Region />
            <Region />
          </Regions>
        </Location>
        <DatePicker>
          <Date>날짜</Date>
          <AddDate>날짜 추가</AddDate>
        </DatePicker>
      </Wrapper>
      <Footer>
        <MatchingButton color="#89B922">검색</MatchingButton>
      </Footer>
    </Container>
  );
});

const Header = styled.header`
  padding: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
`;

const ClosedButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  width: 30px;
  font-size: ${props => props.theme.sm.fontSize};
  background-color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  flex: 1;
`;
const Location = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 20px;
  gap: 24px;
  background-color: white;
  box-shadow: 5px 5px 8px 0 ${props => props.theme.lightGray};
`;

const Title = styled.p`
  font-size: ${props => props.theme.xl.fontSize};
  font-weight: 900;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 16px;
`;

const Magnify = styled.img`
  height: 100%;
  padding: 16px;
`;

const Placeholder = styled.div`
  font-size: ${props => props.theme.sm.fontSize};
  color: ${props => props.theme.gray};
`;

const Regions = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;

const Region = styled.img`
  flex: 1;
`;

const DatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 12px;
  padding: 16px 24px;
  background-color: white;
  box-shadow: 2px 2px 2px 0 ${props => props.theme.lightGray};
`;

const Date = styled.div`
  font-size: ${props => props.theme.sm.fontSize};
`;
const AddDate = styled.button`
  font-size: ${props => props.theme.sm.fontSize};
  font-weight: bold;
`;

const Footer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${props => props.theme.lightGray};
`;
