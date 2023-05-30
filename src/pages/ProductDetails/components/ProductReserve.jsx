import { React, useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { kakaoLogin } from "../../../components/Login/kakaoLogin";
import { useAuth } from "../../../hooks/useAuth";
import { useProductPaymentProcess } from "../../../components/Payment/useProductPaymentProcess";

import TimeTable from "./TimeTable";

import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

const ProductReserve = ({
  courtData,
  startDate,
  setStartDate,
  reserveData,
  setReserveData,
}) => {
  const { detailPaymentProcess } = useProductPaymentProcess();
  const { isAuthenticated, user } = useAuth();
  const { price, timeSlots } = courtData;
  const [isDate, setIsDate] = useState(false);
  const [isTime, setIsTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [inputValues, setInputValues] = useState("");

  const handleInput = e => {
    const { id, value } = e.target;
    setInputValues({ [id]: value });
  };

  const matching = inputValues.matching ? 1 : 0;
  console.log("price", typeof price);
  const taxPrice = price + (price / 100) * 14;
  const totalPrice = () => {
    return inputValues.matching ? taxPrice / 2 : taxPrice;
  };

  const doReserve = () => {
    setReserveData({
      ...reserveData,
      timeSlot: selectedTime,
      isMatch: matching,
      amount: totalPrice(),
    });

    !isAuthenticated ? detailPaymentProcess() : console.log("no");
  };

  const dateButton = e => {
    setIsTime(false);
    setIsDate(!isDate);
  };

  const timeButton = e => {
    setIsDate(false);
    setIsTime(!isTime);
  };

  const startTime = selectedTime.slice(11, 16);
  const endTime = new Date(selectedTime);
  endTime.setHours(endTime.getHours() + 1);
  const formattedTime = `${startTime} ~ ${endTime
    .getHours()
    .toString()
    .padStart(2, "0")}:00`;

  const dateFormat = date => {
    if (!date) return;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  };

  const changeDate = () => {
    if (!selectedDate) return startDate;
    if (selectedDate) return dateFormat(selectedDate);
  };

  useEffect(() => {
    setStartDate(changeDate());
  }, [selectedDate]);

  return (
    <Flex>
      <CourtPrice>
        {price}원 /<span>시간당</span>
      </CourtPrice>
      <SelectBox>
        <DateButton onClick={dateButton}>
          <span>예약 날짜</span>
          <span>{changeDate()}</span>
          {isDate && (
            <DatePickerWrapper>
              <DatePicker
                locale={ko}
                dateFormat="yyyy/MM/dd"
                selected={selectedDate}
                minDate={new Date()}
                maxDate={addDays(new Date(), 6)}
                showDisabledMonthNavigation
                onChange={date => setSelectedDate(date)}
                inline
              >
                <div>
                  현재 날짜를 기준으로 6일후까지만
                  <br /> 예약이 가능합니다.
                </div>
              </DatePicker>
            </DatePickerWrapper>
          )}
        </DateButton>

        <TimeButton onClick={timeButton}>
          <span>예약 시간</span>

          {!startTime ? (
            <TimeSelectNotice>시간을 선택해주세요</TimeSelectNotice>
          ) : (
            <span> {formattedTime}</span>
          )}

          {isTime && (
            <TimeTableWapper>
              <TimeTable time={timeSlots} setSelectedTime={setSelectedTime} />
            </TimeTableWapper>
          )}
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
      <ReserveButton onClick={doReserve} disabled={!selectedTime}>
        예약하기
      </ReserveButton>
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
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  margin-top: 20px;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }
`;

const DateButton = styled.div`
  position: relative;
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

  span {
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

const DatePickerWrapper = styled.div`
  width: 280px;
  position: absolute;
  top: 90px;
  left: 10px;
  z-index: 1;
`;

const TimeButton = styled.div`
  position: relative;
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

  span {
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

const TimeTableWapper = styled.div`
  width: 280px;
  height: 317px;
  position: absolute;
  padding: 15px;
  box-sizing: border-box;
  top: 90px;
  right: 10px;
  z-index: 1;
  background-color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 20px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  cursor: default;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.lightGray};
    border-radius: 6px;
  }
`;

const TimeSelectNotice = styled.span`
  margin-top: 3px;
  font-size: 12px;
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

  &:disabled {
    background-color: ${props => props.theme.gray};
    box-shadow: none;
    cursor: default;
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
