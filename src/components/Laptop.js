import React, { useEffect, useState } from "react";
import BasePanel from "./BasePanel";
import TopPanel from "./TopPanel";
import Confetti from "react-confetti";

// Foreground of project
const Laptop = () => {
  const [power, setPower] = useState(false);
  const [show, setShow] = useState(false);
  const [fingerScan, setFingerScan] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [shuttingDown, setShuttingDown] = useState(false);

  const handlePower = () => {
    setFingerScan(false);
    if (power) {
      setShuttingDown(true);
      setTimeout(() => {
        setPower(!power);
        setShuttingDown(false);
      }, 2000);
    } else {
      setPower(!power);
    }
  };

  useEffect(() => {
    if (!power) {
      setCelebrate(false);
    }
  }, [power]);
  const handleShutDown = () => {
    setShuttingDown(true);
    setTimeout(() => {
      setPower(false);
      setShuttingDown(false);
    }, 2000);
  };

  const handleRestart = () => {
    setPower(false);
    setTimeout(() => {
      setPower(true);
    }, 1000);
  };

  const handleFingerScan = () => {
    setFingerScan(true);
  };

  const handleCelebrate = (value) => {
    setCelebrate(value);
  };

  const keyboardToggle = () => {
    const keyboard = document.querySelector(".base");
    keyboard.classList.toggle("show-keyboard");
    if (keyboard.classList.contains("show-keyboard")) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="full-screen flex sm:flex-row xs:flex-col xs:gap-12 md:gap-24 lg:gap-40 items-center justify-center hover:cursor-pointer w-screen h-screen">
      {celebrate && <Confetti className="absolute w-full h-full" />}
      <div className="laptop-wrapper flex flex-col xs:w-4/5 xs:h-3/4 sm:w-1/2 sm:h-[65%] md:h-3/4 lg:h-4/5 xl:h-[95vh] xl:w-[42%]">
        <TopPanel
          power={power}
          fingerScan={fingerScan}
          handleCelebrate={handleCelebrate}
          celebrate={celebrate}
          handleShutDown={handleShutDown}
          handleRestart={handleRestart}
          shuttingDown={shuttingDown}
        />
        <BasePanel
          handlePower={handlePower}
          handleFingerScan={handleFingerScan}
        />
      </div>
      <div>
        <button
          onClick={keyboardToggle}
          className="text-white bg-gradient-to-br from-purple-700 to-blue-600 active:scale-110 transition ease-in duration-900 sm:w-40 hover:bg-gradient-to-bl  hover:scale-105 font-semibold rounded-lg text-xl p-2 shadow-lg text-center"
        >
          {show ? "Hide" : "Show"} Keyboard
        </button>
        <ul className="guide text-white mt-4 text-center list-none">
          <li>Press Power Key</li>
          <li>Password : 1234</li>
        </ul>
      </div>
    </div>
  );
};

export default Laptop;
