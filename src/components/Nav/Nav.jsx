import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import ModalOfNav from "./Filter/ModalOfNav";
import DetailedFilter from "./DetailedFilter/DetailedFilter";
import ModalBackgroundColor from "./DetailedFilter/ModalBackgroundColor";
import { mainCourtListAtom } from "../../recoil/mainCourtListAtom";
import { navFilterAtom, querySelector } from "../../recoil/navFilterAtom";
import { DISTRICT_LIST, TIME_SLOT } from "./Data/local-data";

const Nav = () => {
  const navigate = useNavigate();
  const [navFilter, setNavFilter] = useRecoilState(navFilterAtom);
  const { position, district, date, time } = navFilter;
  const setCourtList = useSetRecoilState(mainCourtListAtom);
  const queries = useRecoilValue(querySelector);

  const openFilterModal = positionNumber => {
    setNavFilter({
      ...navFilter,
      position: position === positionNumber ? -1 : positionNumber,
    });
  };

  const search = () => {
    setNavFilter({
      ...navFilter,
      position: -1,
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/courts?${queries}`)
      .then(res => {
        setCourtList(res.data);
      });
    navigate(`/`);
  };

  useEffect(() => {
    document.querySelector("body").style.overflow =
      position === 3 ? `hidden` : `scroll`;
  }, [position]);

  return (
    <Container>
      <FilterContainer>
        <FilterNode>
          <SelectDistrict onClick={() => openFilterModal(0)}>
            <p>장소</p>
            {district ? (
              <SelectedFont>
                {DISTRICT_LIST.find(item => item.id === district).district}
              </SelectedFont>
            ) : (
              <UnSelectedFont>선택한 장소</UnSelectedFont>
            )}
          </SelectDistrict>
          <ModalBox>{position === 0 && <ModalOfNav />}</ModalBox>
        </FilterNode>

        <FilterNode>
          <SelectDate onClick={() => openFilterModal(1)}>
            <p>날짜</p>
            {date ? (
              <SelectedFont>
                {`${date} (${new Date(date).toLocaleDateString(`kr-KO`, {
                  weekday: "short",
                })}
                  )`}
              </SelectedFont>
            ) : (
              <UnSelectedFont>선택한 날짜</UnSelectedFont>
            )}
          </SelectDate>
          <ModalBox>{position === 1 && <ModalOfNav />}</ModalBox>
        </FilterNode>

        <FilterNode>
          <SelectTimeArea>
            <SelectTime onClick={() => openFilterModal(2)}>
              <p>시간</p>
              {time ? (
                <SelectedFont>
                  {TIME_SLOT.find(
                    item => item.format === time
                  ).timeSlot.replace(`-`, `~`)}
                </SelectedFont>
              ) : (
                <UnSelectedFont>선택한 시간</UnSelectedFont>
              )}
            </SelectTime>
            <SearchIcon onClick={search} />
          </SelectTimeArea>
          <ModalBox>{position === 2 && <ModalOfNav />}</ModalBox>
        </FilterNode>
      </FilterContainer>

      <DetailedFilterbutton onClick={() => openFilterModal(3)}>
        필터
      </DetailedFilterbutton>
      {position === 3 && (
        <>
          <DetailedFilter />
          <ModalBackgroundColor />
        </>
      )}
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
`;

const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
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

const SelectDistrict = styled(Select)`
  padding-left: 30px;
`;

const SelectDate = styled(Select)``;

const SelectTimeArea = styled(Select)`
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SelectTime = styled(Select)``;

const SelectedFont = styled.p`
  font-size: 15px;
`;

const UnSelectedFont = styled.p`
  color: ${props => props.theme.gray};
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

const DetailedFilterbutton = styled.button`
  border: 1px solid ${props => props.theme.lightGray};
  padding: 10px 20px;
  border-radius: 30px;
  margin-left: 20px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;
