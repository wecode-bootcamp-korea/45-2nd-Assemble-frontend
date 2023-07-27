export const timeFormat = (data) => {
  const startTime = data.slice(11, 16);
  const fullTimeData = new Date(data);
  const endTime = fullTimeData.getHours() + 1;
  const formattedTime = `${startTime} ~ ${endTime}:00`;

  return {
    "startTime":startTime,
    "formattedTime":formattedTime,
  }
}

export const dateFormat = date => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
};