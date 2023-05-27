export const useTimeSlot = timeSlot => {
  const startTime = timeSlot.slice(11, 16);
  const endTime = new Date(timeSlot);
  endTime.setHours(endTime.getHours() + 1);
  const formattedTime = `${startTime} ~ ${endTime
    .getHours()
    .toString()
    .padStart(2, "0")}:00`;

  const date = new Date(timeSlot);
  // 요일을 나타내는 텍스트 배열
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = weekdays[date.getDay()];
  const formattedDate = `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
  return [formattedTime, formattedDate];
};
