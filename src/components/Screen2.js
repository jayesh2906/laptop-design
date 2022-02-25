import React from "react";
const addZero = (value) => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

// Second screen - cover screen with date and time
const Screen2 = ({ handleClick }) => (
  <div
    onClick={handleClick}
    className="screen2 bg-cover bg-coverImage bg-no-repeat bg-center h-full w-full relative"
  >
    <div className="dateTime absolute left-0 bottom-0 w-2/5 h-2/5 flex flex-col justify-center pl-2">
      <div className="date text-lg font-bold text-white">{`${addZero(
        new Date().getHours()
      )} : ${addZero(new Date().getMinutes())}`}</div>
      <div className="time text-white xs:text-xxs sm:text-xs">
        {`${new Date().toLocaleString("en-us", {
          weekday: "long",
        })}, ${new Date().toLocaleString("default", {
          month: "long",
        })} ${new Date().getDate()}`}
      </div>
    </div>
  </div>
);

export default Screen2;
