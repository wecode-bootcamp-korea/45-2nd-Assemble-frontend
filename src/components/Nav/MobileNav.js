import React from "react";
import { useModal } from "@ebay/nice-modal-react";
import MobileNavModal from "./MobileNavModal";
import styled from "styled-components";

const MobileNav = () => {
  const mobileNavModal = useModal(MobileNavModal);
  const showMNavModal = () => {
    mobileNavModal.show();
  };

  return (
    <MNavContainer>
      <MNavWrapper>
        <MNavSearch onClick={showMNavModal}>
          <MNavImg src="/images/search.png" alt="magnify" />
          <MNavLocation>어디든지</MNavLocation>
        </MNavSearch>
        <MNavFilter>
          <MNavFilterImg src="/images/filter.png" al="filter" />
        </MNavFilter>
      </MNavWrapper>
    </MNavContainer>
  );
};

export default MobileNav;

const MNavContainer = styled.div`
  width: 100%;
  padding: 16px 24px;
`;

const MNavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 36px;
  box-shadow: 5px 5px 5px 0 ${props => props.theme.lightGray};
  padding: 8px 15px 8px 20px;
`;

const MNavSearch = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
`;
const MNavFilter = styled.button`
  width: 40px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.lightGray};
`;
const MNavFilterImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 8px;
`;
const MNavImg = styled.img`
  height: 100%;
  padding: 8px;
`;

const MNavLocation = styled.span`
  font-size: ${props => props.theme.base.fontSize};
  line-height: ${props => props.theme.base.lineHeight};
`;
