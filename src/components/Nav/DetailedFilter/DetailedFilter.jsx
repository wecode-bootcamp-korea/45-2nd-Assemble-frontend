import React from "react";
import styled from "styled-components";
import DetailedFilterHeader from "./DetailedFilterHeader";
import DetailedFilterContent from "./DetailedFilterContent";
import DetailedFilterFooter from "./DetailedFilterFooter";

const DetailedFilter = () => {
  return (
    <DetailedFilterModal>
      <DetailedFilterHeader />
      <DetailedFilterContent />
      <DetailedFilterFooter />
    </DetailedFilterModal>
  );
};

export default DetailedFilter;

const DetailedFilterModal = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: white;
  z-index: 200;
  top: 100px;
  width: 600px;
  height: 705px;
  padding: 20px 30px;
  border-radius: 10px;
  overflow: auto;
`;
