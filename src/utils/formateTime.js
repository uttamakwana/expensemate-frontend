export const formateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const period = hours < 12 ? "AM" : "PM";
  const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format

  const formattedDateTime = `${day} ${month} ${year} at ${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${period}`;
  return formattedDateTime;
};
