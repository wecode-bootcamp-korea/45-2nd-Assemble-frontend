import { React, useEffect, useState } from "react";
import styled from "styled-components";

const ProductReserve = ({ courtData }) => {
  const { price } = courtData;
  const taxPrice = (price / 100) * 14 + price;
  const [inputValues, setInputValues] = useState("");

  const handleInput = event => {
    const { id, value } = event.target;
    setInputValues({ [id]: value });
  };
  const totalPrice = () => {
    return inputValues.matching ? taxPrice / 2 : taxPrice;
  };

  return (
    <Flex>
      <CourtPrice>
        {price}원 /<span>시간당</span>
      </CourtPrice>
      <SelectBox>
        <DateButton>
          <span>예약 날짜</span>
          <span>2023.05.23</span>
        </DateButton>
        <TimeButton>
          <span>예약 시간</span>
          <span>13:00 - 14:00</span>
        </TimeButton>
        <MatchButton>
          <Title>파트너 매칭 희망 여부</Title>
          <Box>
            <input
              type="radio"
              id="noMatching"
              name="isMatch"
              defaultChecked
              onChange={handleInput}
            />
            <label htmlFor="noMatching">파트너 매칭이 필요하지 않아요</label>
          </Box>
          <Box>
            <input
              type="radio"
              id="matching"
              name="isMatch"
              onChange={handleInput}
            />
            <label htmlFor="matching">파트너 매칭이 필요해요</label>
          </Box>
        </MatchButton>
      </SelectBox>
      <ReserveButton>예약하기</ReserveButton>
      <Notice>매칭을 희망하신 경우 이용 금액의 절반이 결제됩니다.</Notice>
      <Line />
      <TotalPrice>
        <span>
          총 결제 금액
          <PayInfo />
        </span>
        <span>{totalPrice()}원</span>
      </TotalPrice>
    </Flex>
  );
};

export default ProductReserve;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 80px 40px 0 0;
  padding: 30px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 20px;

  @media screen and (max-width: 1280px) {
    width: 300px;
    padding: 10px;
    margin-right: 5%;
  }

  @media screen and (max-width: 800px) {
    width: 300px;
    padding: 10px;
    margin: 0;
  }
`;

const CourtPrice = styled.p`
  width: 300px;
  margin-top: 10px;
  font-size: 17px;
  font-weight: 500;

  span {
    font-size: 14px;
  }

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const SelectBox = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const DateButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 20px;
  border: 1px solid ${props => props.theme.lightGray};
  border-top-left-radius: 10px;
  cursor: pointer;

  span:first-child {
    margin-bottom: 10px;
    font-weight: 500;
  }

  span:last-child {
    font-weight: 300;
  }

  @media screen and (max-width: 1280px) {
    width: 50%;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const TimeButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 20px;
  border: 1px solid ${props => props.theme.lightGray};
  border-top-right-radius: 10px;
  cursor: pointer;

  span:first-child {
    margin-bottom: 10px;
    font-weight: 500;
  }

  span:last-child {
    font-weight: 300;
  }

  @media screen and (max-width: 1280px) {
    width: 50%;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const MatchButton = styled.fieldset`
  width: 300px;
  height: 130px;
  padding: 20px;
  border: 1px solid ${props => props.theme.lightGray};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (max-width: 1280px) {
    height: 100px;
    padding: 10px 0 10px 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;

  [type="radio"] {
    appearance: none;
    width: 15px;
    height: 15px;
    background-image: url("/images/CheckBox/unChecked.png");
  }

  [type="radio"]:checked {
    width: 15px;
    height: 15px;
    background-image: url("/images/CheckBox/checked.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  label {
    margin-top: 3px;
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 1280px) {
      font-size: 12px;
    }
  }
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: 500;

  @media screen and (max-width: 1280px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const ReserveButton = styled.button`
  width: 300px;
  height: 50px;
  margin: 15px 0;
  background-color: ${props => props.theme.green};
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background-color: ${props => props.theme.lightGreen};
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const Notice = styled.p`
  margin-bottom: 30px;
  font-size: 12px;
  color: ${props => props.theme.gray};

  @media screen and (max-width: 1280px) {
    width: 90%;
    margin-bottom: 20px;
    font-size: 10px;
  }
`;

const Line = styled.div`
  width: 300px;
  height: 1px;
  background-color: ${props => props.theme.lightGray};
`;

const TotalPrice = styled.div`
  width: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 90%;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  span {
    display: flex;
    margin-right: 5px;
    font-size: 17px;
    font-weight: 500;

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

const PayInfo = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-image: url("images/ProductDetail/PayInfo.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover:after {
    position: absolute;
    top: -65px;
    left: -120px;
    content: "총 결제 금액은 시설 이용 금액과 자사의 예약 서비스 이용 수수료가 포함된 최종 가격입니다.";
    width: 350px;
    height: 50px;
    padding: 10px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    line-height: 15px;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.lightGray};
    border-radius: 10px;
    color: ${props => props.theme.gray};
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
