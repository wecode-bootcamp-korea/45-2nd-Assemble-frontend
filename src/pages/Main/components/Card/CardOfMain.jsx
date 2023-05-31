import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardOfMain = ({ item: { address, courtImage, name } }) => {
  return (
    <Container>
      <CourtLink to="/court" target="_blank">
        <CardImgWrapper>
          <CardImg src={courtImage[0]} alt="테니스장 사진" />
        </CardImgWrapper>
        <CardInfo>
          <CardTitle>{name}</CardTitle>
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
  max-width: 280px;
  max-height: 430px;
  display: flex;
  flex-direction: column;
  &:hover {
    ${CardImg} {
      filter: brightness(150%);
    }
  }
`;

const CardImgWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  flex: 1.2;
  padding-bottom: 16px;
`;

const CourtLink = styled(Link)`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    ${CardImg} {
      filter: brightness(150%);
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
