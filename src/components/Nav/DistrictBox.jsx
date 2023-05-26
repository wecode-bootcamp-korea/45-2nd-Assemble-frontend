import React from "react";
import styled from "styled-components";

const DistrictBox = () => {
  return (
    <DistrictFlexBox>
      {DISTRICT_GANGBUCK.map(data => {
        return <District>{data.district}</District>;
      })}
    </DistrictFlexBox>
  );
};

export default DistrictBox;

const DISTRICT_GANGBUCK = [
  { id: 1, district: "종로구" },
  { id: 2, district: "중구" },
  { id: 3, district: "용산구" },
  { id: 4, district: "성동구" },
  { id: 5, district: "광진구" },
  { id: 6, district: "동대문구" },
  { id: 7, district: "중랑구" },
  { id: 8, district: "성북구" },
  { id: 9, district: "강북구" },
  { id: 10, district: "도봉구" },
  { id: 11, district: "노원구" },
  { id: 12, district: "은평구" },
  { id: 13, district: "서대문구" },
  { id: 14, district: "마포구" },
];

const DISTRICT_GANGNAM = [
  { id: 15, district: "양천구" },
  { id: 16, district: "강서구" },
  { id: 17, district: "구로구" },
  { id: 18, district: "금천구" },
  { id: 19, district: "영등포구" },
  { id: 20, district: "동작구" },
  { id: 21, district: "관악구" },
  { id: 22, district: "서초구" },
  { id: 23, district: "강남구" },
  { id: 24, district: "송파구" },
  { id: 25, district: "강동구" },
];

const DistrictFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
`;

const District = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid ${props => props.theme.lightGray};
  font-size: 13px;
  margin: 5px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
