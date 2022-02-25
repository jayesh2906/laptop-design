import React, { useState, useEffect } from "react";
import desktop from "../assets/desktop.JPG";
import taskbar from "../assets/taskbar.png";

const addZero = (value) => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

// Fourth screen - window screen of laptop after successfull sign in or fingerscan
const Desktop = ({
  handleCelebrate,
  celebrate,
  handleShutDown,
  handleRestart,
  handleSleep,
}) => {
  const [notification, setNotification] = useState(false);
  const [startMenu, setStartMenu] = useState(false);
  const [resize, setResize] = useState(false);

  const StartDropDown = () => {
    return (
      <div
        className={`window-option absolute ${
          startMenu ? "visible" : "invisible"
        } flex-col bg-slate-800 z-30 bottom-0 left-0 xs:w-[25%] sm:w-[20%] lg:w-[15%] text-white text-xs`}
      >
        <div
          onClick={handleSleep}
          className="sleep basis-1/3 flex items-center p-1 gap-2 border-b border-gray-600 hover:bg-red-600 active:bg-transparent hover:scale-105"
        >
          <i className="fa fa-moon-o" aria-hidden="true"></i>
          <p className="overflow-hidden">Sleep</p>
        </div>
        <div
          onClick={handleRestart}
          className="restart basis-1/3 flex items-center p-1 gap-2 border-b border-gray-600 hover:bg-red-600 active:bg-transparent hover:scale-105"
        >
          <i className="fa fa-rotate-left"></i>
          <p className="overflow-hidden">Restart</p>
        </div>
        <div
          onClick={handleShutDown}
          className="shutdown basis-1/3 flex items-center p-1 gap-2 hover:bg-red-600 active:bg-transparent hover:scale-105"
        >
          <i className="fa fa-power-off" aria-hidden="true"></i>
          <p className="overflow-hidden">Shutdown</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (celebrate) {
      setNotification(true);
    } else {
      setNotification(false);
    }
  }, [celebrate]);

  const NotificationModal = () => {
    return (
      <div
        className={`modal absolute ${notification ? "visible" : "invisible"} ${
          resize
            ? "w-[60%] h-[75%] translate-y-[10%] translate-x-[35%]"
            : "w-full h-full"
        } flex flex-col z-20 rounded-md overflow-hidden`}
      >
        <div className="basis-[8%] bg-gray-300 cursor-pointer text-xs">
          <div className="closeModal flex items-center h-full justify-end">
            <div
              onClick={() => {
                setNotification(false);
                handleCelebrate(false);
              }}
              className=" hover:bg-gray-200 px-1 mb-2 active:bg-inherit"
            >
              <i class="fa fa-window-minimize" aria-hidden="true"></i>
            </div>
            <div
              onClick={() => setResize(!resize)}
              className=" hover:bg-gray-200 px-1 active:bg-inherit"
            >
              <i class="fa fa-window-restore" aria-hidden="true"></i>
            </div>
            <div
              onClick={() => {
                setNotification(false);
                handleCelebrate(false);
              }}
              className="hover:bg-red-600 hover:text-white px-1 active:bg-inherit active:text-inherit"
            >
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div
          className="basis-[92%]
         grid place-content-center bg-celebrate bg-no-repeat bg-bottom bg-cover border-x-4 border-b-4 border-gray-300 text-2xl text-center font-bold font-serif capitalize px-2"
        >
          Happy Work Anniversary to me!
        </div>
      </div>
    );
  };

  const Screen = () => {
    return (
      <div className="basis-[87%] flex relative">
        <StartDropDown />
        <NotificationModal />
        <figure className="basis-1/5">
          <img
            className="w-[80%] h-[90%]"
            src={desktop}
            alt="desktop shotcuts"
          />
        </figure>
        <div className="basis-3/5 grid place-content-center">
          <div className="notification relative">
            <div
              className={`${
                notification ? "invisible" : "visible"
              } bg-red-600 text-white px-2 rounded-full absolute top-0 -right-2 z-10`}
            >
              1
            </div>
            <i
              onClick={() => {
                setNotification(true);
                handleCelebrate(true);
              }}
              className="fa fa-envelope text-5xl text-yellow-300 hover:text-yellow-100 active:scale-100 active:text-yellow-300 hover:scale-105"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    );
  };

  const Left = () => {
    return (
      <div className="search-left basis-[30%] pl-1 flex">
        <div
          onClick={() => setStartMenu(!startMenu)}
          className="window basis-[15%] hover:scale-110 grid place-content-center pr-1 text-sm"
        >
          <i className="fa fa-windows text-white" aria-hidden="true"></i>
        </div>
        <div className="search basis-[65%] bg-white flex items-center justify-center cursor-pointer gap-1">
          <input
            className="text-xxs text-black w-1/2 outline-none"
            type="text"
            placeholder="Type here to search"
          />
          <i
            className="fa fa-search text-gray-500 text-xs hover:text-black hover:scale-105"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  };

  const Middle = () => {
    return (
      <div className="taskbar-middle basis-[40%]  grid place-content-center place-items-center">
        <img className="w-[70%]" src={taskbar} alt="taskbar" />
      </div>
    );
  };

  const Right = () => {
    return (
      <div className="icons-right basis-[30%] flex justify-end cursor-pointer items-center gap-2 text-xxs">
        <i
          title="Internet"
          className="fa fa-wifi text-slate-300 hover:text-white hover:scale-110"
        ></i>
        <i
          title="Volume"
          className="fa fa-volume-up text-slate-300 hover:text-white hover:scale-110"
          aria-hidden="true"
        ></i>
        <i
          title="Battery"
          className="fa fa-battery-full text-slate-300 hover:text-white hover:scale-110"
        ></i>

        <div className="dateTime flex-col text-xxs whitespace-nowrap pr-2">
          <p
            title={`${addZero(new Date().getHours())} : ${addZero(
              new Date().getMinutes()
            )}`}
            className="text-slate-300 hover:text-white text-right hover:scale-110"
          >
            {`${addZero(new Date().getHours())} : ${addZero(
              new Date().getMinutes()
            )}`}
          </p>
          <p
            title={`${new Date().toDateString().split(" ").slice(1).join("-")}`}
            className=" text-slate-300 hover:text-white hover:scale-110"
          >
            {`${new Date().toDateString().split(" ").slice(1).join("-")}`}
          </p>
        </div>
      </div>
    );
  };

  const StartMenu = () => {
    return (
      <div className="basis-[13%] bg-slate-900 flex">
        <Left />
        <Middle />
        <Right />
      </div>
    );
  };

  return (
    <>
      <div className="screen3 bg-wallpaper bg-no-repeat bg-bottom bg-cover h-full w-full flex flex-col">
        <Screen />
        <StartMenu />
      </div>
    </>
  );
};

export default Desktop;
