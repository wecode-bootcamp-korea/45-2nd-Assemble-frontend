import styled from "styled-components";

const CardForModal = () => {
  return (
    <Container>
      <CardImgWrapper>
        <CardImg src="/images/tennis.png" alt="테니스장사진" />
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>그리너리</CardTitle>
        <CardLocation>
          서울시 강남구 테헤란로 427 위워크 선릉 2호점 10층
        </CardLocation>
        <CardDate>2023년 5월 22일 월요일</CardDate>
        <CardTime>17:00 ~ 19:00</CardTime>
        <CardPrice>20,000 원/시간</CardPrice>
      </CardInfo>
    </Container>
  );
};

export default CardForModal;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

const CardImgWrapper = styled.div`
  width: 100%;
  flex: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 440px) {
    display: none;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex;
  gap: 4px;
  flex: 1;
  @media screen and (max-width: 440px) {
    padding: 0 0 0 12px;
    gap: 2px;
  }
`;

const CardLocation = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
`;

const CardTitle = styled.p`
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.lg.fontSize};
    line-height: ${props => props.theme.lg.lineHeight};
  }

  @media screen and (max-width: 440px) {
    font-size: ${props => props.theme.base.fontSize};
  }
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
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
  font-weight: 700;
  @media screen and (max-width: 440px) {
    font-weight: 500;
  }
`;
