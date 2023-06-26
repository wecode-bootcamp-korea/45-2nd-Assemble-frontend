import styled from "styled-components";
import { matchingAtom } from "../../pages/Matching/matchingAtom";
import { useRecoilState } from "recoil";
import { useTimeSlot } from "../../hooks/useTime";

const CardForModal = ({ courtInfo, timeSlot }) => {
  console.log(courtInfo);
  const { address, price, courtName, courtImage } = courtInfo;
  const [formattedTime, formattedDate] = useTimeSlot(timeSlot);

  return (
    <Container>
      <CardImgWrapper>
        <CardImg src={courtImage} alt="테니스장사진" />
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>{courtName}</CardTitle>
        <CardLocation>{address}</CardLocation>
        <CardDate>{formattedDate}</CardDate>
        <CardTime>{formattedTime}</CardTime>
        <CardPrice>{`${price} 원/시간`}</CardPrice>
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
