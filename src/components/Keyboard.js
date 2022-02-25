import React from "react";

// Keybaord - contains all the key button.
const Keyboard = ({ handlePower }) => {
  const row1 = [
    "esc",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12",
    "ins",
    "prt",
    "del",
    "icon",
  ];
  const row2 = [
    ["~", "`"],
    ["!", "1"],
    ["@", "2"],
    ["#", "3"],
    ["$", "4"],
    ["%", "5"],
    ["^", "6"],
    ["&", "7"],
    ["*", "8"],
    ["(", "9"],
    [")", "0"],
    ["--", "-"],
    ["+", "="],
    ["back", ""],
    ["home", ""],
  ];
  const row3 = [
    "tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{ [",
    "} ]",
    "|",
    "pgup",
  ];
  const row4 = [
    "caps",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":  ;",
    "'' '",
    "enter",
    "pgdn",
  ];
  const row5 = [
    "shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "< ,",
    "> .",
    "? /",
    "shift",
    "end",
  ];
  const row6 = [
    "ctrl",
    "fn",
    "icon",
    "alt",
    "space",
    "alt",
    "ctrl",
    "<",
    "updown",
    ">",
  ];
  return (
    <div className="keyboard flex flex-col basis-3/6 w-[90%] gap-1 shadow-inner p-1">
      <div key={1} className="row1 row">
        {row1.map((item) =>
          item === "icon" ? (
            <i
              key={item}
              onClick={handlePower}
              className="fa fa-power-off key w-[5.4%]"
              aria-hidden="true"
            ></i>
          ) : (
            <div key={item} className="key w-[5.4%]">
              {item}
            </div>
          )
        )}
      </div>
      <div key={2} className="row2 row">
        {row2.map((item) => (
          <div key={item} className="key w-[6.2%]">
            <div>{item[0]}</div>
            <div>{item[1]}</div>
          </div>
        ))}
      </div>
      <div key={3} className="row3 row">
        {row3.map((item) => (
          <div key={item} className="key w-[6.2%]">
            {item}
          </div>
        ))}
      </div>
      <div key={4} className="row4 row">
        {row4.map((item) =>
          item === "enter" ? (
            <div key={item} className="key w-[11%]">
              {item}
            </div>
          ) : (
            <div key={item} className="key w-[6.2%]">
              {item}
            </div>
          )
        )}
      </div>
      <div key={5} className="row5 row">
        {row5.map((item, index) =>
          item === "shift" ? (
            <div key={index} className="key w-[13%]">
              {item}
            </div>
          ) : (
            <div key={index} className="key w-[6.2%]">
              {item}
            </div>
          )
        )}
      </div>
      <div key={6} className="row6 row">
        {row6.map((item, index) =>
          item === "space" ? (
            <div key={index} className="key w-[27%]"></div>
          ) : item === "icon" ? (
            <i
              key={index}
              className="fa fa-windows key w-[7.5%]"
              aria-hidden="true"
            ></i>
          ) : item === "updown" ? (
            <i
              key={index}
              className="fa fa-angle-up key w-[7.5%] "
              aria-hidden="true"
            ></i>
          ) : (
            <div key={index} className="key w-[7.5%]">
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Keyboard;
