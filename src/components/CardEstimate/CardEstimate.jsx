import React from "react";
import styled from "styled-components";

const CardEstimate = () => {
  return (
    <Box>
      <div>완료된 예약내역-공통 컴포넌트 추가 예정</div>
      <TestImg src="/images/Level3.png" alt="코트장이미지 예정" />
    </Box>
  );
};

export default CardEstimate;

const Box = styled.div`
  padding: 16px;
  filter: brightness(0.7);
  border-radius: 30px;
  background-color: #d9d9d9;
`;

const TestImg = styled.img`
  height: 100px;
`;
