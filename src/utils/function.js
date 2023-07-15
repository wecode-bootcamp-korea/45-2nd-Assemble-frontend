export const timeFormat = (data) => {
  const startTime = data.slice(11, 16);
  const endTime = new Date(data);
  endTime.setHours(endTime.getHours() + 1);
  const formattedTime = `${startTime} ~ ${endTime
    .getHours()
    .toString()
    .padStart(2, "0")}:00`;

    return {"startTime":startTime,
    "endTime":endTime
    ,"formattedTime":formattedTime,
  }

}

export const dateFormat = date => {
    if (!date) return;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
};