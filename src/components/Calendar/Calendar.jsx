import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <CustomButton className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </CustomButton>
  ));
  return (
    <DatePicker
      closeOnScroll={true}
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      minDate={new Date()}
      maxDate={addDays(new Date(), 6)}
      showDisabledMonthNavigation
    >
      <div style={{ color: "red", textAlign: "center" }}>
        오늘을 기준으로 7일후까지 예약이 가능합니다.
      </div>
    </DatePicker>
  );
};

export default Calendar;

const CustomButton = styled.button`
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
`;
