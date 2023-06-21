const FormatDate = (fullDate) => {
  const day = formatDay(fullDate.getDay());
  const month = formatMonth(fullDate.getMonth());
  const date = formatDate(fullDate.getDate());

  const newDate = day + " " + month + " " + date + " " + fullDate.getFullYear();

  return newDate;
};

const formatDay = (day) => {
  switch (day) {
    case 0:
      return "SUNDAY";
    case 1:
      return "MONDAY";
    case 2:
      return "TUESDAY";
    case 3:
      return "WEDNESDAY";
    case 4:
      return "THURSDAY";
    case 5:
      return "FRIDAY";
    case 6:
      return "SATURDAY";
    default:
      return null;
  }
};

const formatMonth = (month) => {
  switch (month) {
    case 0:
      return "JANUARY";
    case 1:
      return "FEBRUARY";
    case 2:
      return "MARCH";
    case 3:
      return "APRIL";
    case 4:
      return "MAY";
    case 5:
      return "JUNE";
    case 6:
      return "JULY";
    case 7:
      return "AUGUST";
    case 8:
      return "SEPTEMBER";
    case 9:
      return "OCTOBER";
    case 10:
      return "NOVEMBER";
    case 11:
      return "DECEMBER";
    default:
      return null;
  }
};

const formatDate = (date) => {
  const newDate = date < 10 ? "0" + date : date;
  return newDate;
};

export default FormatDate;
