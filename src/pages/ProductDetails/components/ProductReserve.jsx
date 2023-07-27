import { React, useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { useProductPaymentProcess } from "../../../components/Payment/useProductPaymentProcess";
import { dateFormat, timeFormat } from "../../../utils/function";
import TimeTable from "./TimeTable";

import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

const ProductReserve = ({
  courtData,
  startDate,
  setStartDate,
  dateForCourt, // 배포할 때는 필요없음
}) => {
  const { detailPaymentProcess } = useProductPaymentProcess();
  const { price, timeSlots, courtName, courtId } = courtData;
  const [isDate, setIsDate] = useState(false);
  const [isTime, setIsTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isMatched, setIsMatched] = useState("");
  const [reserveData, setReserveData] = useState({
    courtId: "",
    price: "",
    courtName: "",
    timeSlot: "",
    isMatch: "",
    amount: "",
  });

  const newTimeObject = timeFormat(selectedTime);
  const {startTime,formattedTime} = newTimeObject;

  const changeDate = () => {
    if (!selectedDate) return startDate;
    if (selectedDate) return dateFormat(selectedDate);
  };

  const handleInputIsMatch = e => {
    const { id, value } = e.target;
    setIsMatched({ [id]: value });
  };

  const matching = isMatched.matching;
  const isMatch = matching ? 1 : 0; // 서버로 보낼 때 true는 1 로 false는 0 으로 
  const taxPrice = Math.ceil(Number(price) * 1.14);
  const totalPrice = () => {
    return matching ? taxPrice / 2 : taxPrice;
  };

  const handleReserveButton = () => {
    detailPaymentProcess(matching, reserveData, courtData);
  };

  const handleDateButton = e => {
    setIsTime(false);
    setIsDate(!isDate);
  };

  const handleTimeButton = e => {
    setIsDate(false);
    setIsTime(!isTime);
  };

  useEffect(() => {
    setReserveData({
      courtId: courtId,
      price: price,
      courtName: courtName,
      timeSlot: selectedTime,
      isMatch: isMatch,
      amount: totalPrice(),
    });
  }, [selectedTime, isMatch]);

  useEffect(() => {
    setStartDate(changeDate());
    setIsDate(false);
  }, [selectedDate]);

  return (
    <Flex>
      <CourtPrice>
        {price}원 /<span>시간당</span>
      </CourtPrice>
      <SelectBox>
        <DateBox>
          <DateButton onClick={handleDateButton}>
            <span>예약 날짜</span>
            <span>{changeDate()}</span>
          </DateButton>
          {isDate && (
            <DatePickerWrapper>
              <DatePicker
                locale={ko}
                dateFormat="yyyy/MM/dd"
                selected={selectedDate}
                minDate={new Date()}
                maxDate={addDays(new Date(), 6)}
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
        </DateBox>
        <DateBox>
          <TimeButton onClick={handleTimeButton}>
            <span>예약 시간</span>

            {!startTime ? (
              <TimeSelectNotice>시간을 선택해주세요</TimeSelectNotice>
            ) : (
              <span> {formattedTime}</span>
            )}

            {isTime && (
              <TimeTableWrapper>
                <TimeTable time={timeSlots} setSelectedTime={setSelectedTime} />
              </TimeTableWrapper>
            )}
          </TimeButton>
        </DateBox>
        <MatchButton>
          <Title>파트너 매칭 희망 여부</Title>
          <Box>
            <input
              type="radio"
              id="noMatching"
              name="isMatch"
              defaultChecked
              onChange={handleInputIsMatch}
            />
            <label htmlFor="noMatching">파트너 매칭이 필요하지 않아요</label>
          </Box>
          <Box>
            <input
              type="radio"
              id="matching"
              name="isMatch"
              onChange={handleInputIsMatch}
            />
            <label htmlFor="matching">파트너 매칭이 필요해요</label>
          </Box>
        </MatchButton>
      </SelectBox>
      <ReserveButton onClick={handleReserveButton} disabled={!selectedTime}>
        예약하기
      </ReserveButton>
      <Notice>매칭을 희망하신 경우 이용 금액의 절반이 결제됩니다.</Notice>
      <Line />
      <TotalPrice>
        <span>
          총 결제 금액
          <PayInfo />
        </span>
        <span>{totalPrice().toLocaleString()}원</span>
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
const DateBox = styled.div`
  position: relative;
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

  span {
    font-weight: 300;
  }

  @media screen and (max-width: 1280px) {
    width: 125px;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 10px;
  width: 280px;
  height: 318px;
  box-sizing: border-box;
  z-index: 1;

  @media screen and (max-width: 1280px) {
    top: 65px;
    left: -15px;
  }
`;

const TimeButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 20px;
  box-sizing: border-box;
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
    width: 125px;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const TimeTableWrapper = styled.div`
  position: absolute;
  top: 90px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 317px;
  padding: 15px;
  background-color: white;
  overflow-y: scroll;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 20px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  z-index: 1;
  cursor: default;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 6px;
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.lightGray};
    border-radius: 6px;
  }

  @media screen and (max-width: 1280px) {
    top: 65px;
    right: -15px;
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
  text-align: center;
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
    content: "총 결제 금액은 시설 이용 금액과 자사의 예약 서비스 이용 수수료 14%가 포함된 최종 가격입니다.";
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
