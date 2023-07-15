import React from "react";
import styled from "styled-components";
import { timeFormat } from "../../../utils/function";

const TimeTable = ({ time, setSelectedTime }) => {
  const getTime = e => {
    setSelectedTime(e.target.id);
  };

  return (
    <TimeTableBox>
      {time.map(data => {
        const timeSlot = data.timeSlot;
        const newTimeObject = timeFormat(timeSlot);
        const {startTime,endTime,formattedTime} = newTimeObject;
        return (
          <TimeButton
            onClick={getTime}
            id={timeSlot}
            disabled={data.isAvailable === 0 && true}
            isAvailable={data.isAvailable}
          >
            {formattedTime}
          </TimeButton>
        );
      })}
    </TimeTableBox>
  );
};
export default TimeTable;

const TimeTableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeButton = styled.button`
  width: 120px;
  padding: 7px 10px;
  background-color: ${props =>
    props.isAvailable === 0 ? "lightGray" : "white"};
  border: 1px solid lightGray;
  border-radius: 15px;
  margin-bottom: 5px;
  cursor: ${props => props.isAvailable === 0 && "default"};

  &:hover {
    box-shadow: ${props =>
      props.isAvailable === 0 ? "" : `0 0 11px rgba(33, 33, 33, 0.2)`};
  }
`;
