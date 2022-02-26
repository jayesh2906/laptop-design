import React from "react";
import Keyboard from "./Keyboard";

// Speaker, keyboard and touchpad of Laptop (base panel)
const BasePanel = ({ handlePower, handleFingerScan }) => {
  const Speaker = () => {
    return (
      <div className="basis-1/6 flex flex-col w-[90%] mb-2">
        <div className="joint basis-1/4 w-4/5 mx-auto relative border-b-4 border-x-2 border-black"></div>
        <div className="speaker basis-3/4 overflow-hidden">
          {[...Array(6)].map(() => (
            <ul key={Math.random()} className="flex gap-1">
              {[...Array(150)].map(() => (
                <li key={Math.random()} className="w-1 h-1">
                  .
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  };
  const TouchPad = () => {
    return (
      <div className="touchpad flex justify-between basis-2/6 w-[90%] py-1">
        <p className="probook uppercase font-semibold text-xxs sm:text-xs tracking-widest">
          Probook
        </p>
        <div className="mouse basis-2/5 shadow-inner rounded-md"></div>
        <div className="fingerLock basis-1/12">
          <div
            onClick={handleFingerScan}
            className="h-[30%] w-3/4 ml-auto shadow-inner rounded-sm hover:bg-green-400 active:bg-inherit"
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="base flex flex-col items-center basis-1/2 bg-gray-300 rounded-lg">
      <Speaker />
      <Keyboard handlePower={handlePower} />
      <TouchPad />
    </div>
  );
};

export default BasePanel;
