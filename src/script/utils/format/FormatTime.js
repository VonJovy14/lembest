const FormatTime = (time) => {
  const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const newHours = hours < 10 ? "0" + hours : hours;

  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  const label = time.getHours() > 12 ? "PM" : "AM";

  const newTime = newHours + ":" + minutes + " " + label;

  return newTime;
};

export default FormatTime;
