export default {
  formateDate(time) {
    if (!time) return "";
    let date = new Date(time);
    let sysTime =
      date.getFullYear() +
      "-" +
      date.getMonth() +
      "-" +
      date.getDay() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return sysTime;
  }
};
