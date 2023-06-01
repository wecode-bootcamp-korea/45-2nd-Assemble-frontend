import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import ModalOfMatchingNav from "./Filter/ModalOfMatchingNav";
import { navFilterAtom } from "../../recoil/navFilterAtom";
import {
  matchingNavFilterAtom,
  navSearchFilterAtom,
} from "../../recoil/matchingNavFilterAtom";

import { useNavigate } from "react-router-dom";
const MatchingNav = () => {
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);
  const [query, SetQuery] = useRecoilState(matchingNavFilterAtom);
  const [filter, setFilter] = useRecoilState(navSearchFilterAtom);
  const { position } = navFilter;

  const openFilterModal = positionNumber => {
    setNavFilter({
      ...navFilter,
      position: position === positionNumber ? -1 : positionNumber,
    });
  };

  const search = async () => {
    setFilter(query);
  };

  useEffect(() => {
    document.querySelector("body").style.overflow =
      position === 3 ? `hidden` : `scroll`;
  }, [position]);

  return (
    <Container>
      <FilterContainer>
        <FilterNode>
          <SelectDateArea onClick={() => openFilterModal(1)}>
            <SelectDate>
              <DateTitle>날짜</DateTitle>
              <PickedDate>
                {query
                  ? `${query} (${new Date(query).toLocaleDateString(`kr-KO`, {
                      weekday: "short",
                    })})`
                  : `선택한 날짜`}
              </PickedDate>
            </SelectDate>
            <SearchIcon onClick={search} />
          </SelectDateArea>
          <ModalBox>{position === 1 && <ModalOfMatchingNav />}</ModalBox>
        </FilterNode>
      </FilterContainer>
    </Container>
  );
};

export default MatchingNav;

const Container = styled.div`
  margin: 0 auto;
  max-width: 440px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const FilterContainer = styled.div`
  width: 840px;
  height: 66px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50px;
  display: flex;
  align-items: center;
`;

const FilterNode = styled.div`
  position: relative;
  flex: 1;
`;

const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64px;
  padding: 20px;
  border-radius: 40px;
  font-size: 12px;
  &:hover {
    background-color: ${props => props.theme.lightGray};
    cursor: pointer;
  }

  p:first-child {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const DateTitle = styled.div`
  font-size: 18px;
`;

const PickedDate = styled.div`
  font-size: 15px;
  color: ${props => props.theme.gray};
`;
const SelectDate = styled(Select)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const SelectDateArea = styled(Select)`
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 10px;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url(/images/Nav/searchicon.png);
  background-repeat: space;
  &:hover {
    background-image: url(/images/Nav/searchiconhover.png);
  }
`;

const ModalBox = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100%;
  z-index: 10;
`;
