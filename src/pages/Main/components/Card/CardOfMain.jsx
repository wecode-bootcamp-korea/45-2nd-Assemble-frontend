import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { navFilterAtom } from "../../../../recoil/navFilterAtom";

const CardOfMain = ({ item: { courtId, address, courtImage, courtName } }) => {
  const navFilter = useRecoilValue(navFilterAtom);
  return (
    <Container>
      <CourtLink
        to={`/court?courtId=${courtId}&date=${navFilter.date}&time=${navFilter.time}`}
        target="_blank"
      >
        <CardImgWrapper>
          <CardImg src={courtImage[0]} alt="테니스장 사진" />
        </CardImgWrapper>
        <CardInfo>
          <CardTitle>{courtName}</CardTitle>
          <CardLocation>{address}</CardLocation>
        </CardInfo>
      </CourtLink>
    </Container>
  );
};

export default CardOfMain;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    ${CardImg} {
      filter: brightness(70%);
    }
  }
`;

const CardImgWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  flex: 1.2;
  padding-bottom: 16px;
  position: relative;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const CourtLink = styled(Link)`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    ${CardImg} {
      filter: brightness(70%);
    }
    cursor: pointer;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const CardTitle = styled.p`
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 900;
`;

const CardLocation = styled.p`
  font-size: ${props => props.theme.sm.fontSize};
  line-height: ${props => props.theme.sm.lineHeight};
`;
