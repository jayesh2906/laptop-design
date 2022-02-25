import React, { useEffect, useState } from "react";
import profile from "../assets/Profile.png";
import user from "../assets/user.png";
import { BiFingerprint } from "react-icons/bi";

const Screen3 = ({ fingerScan, handleFourth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (password !== "1234") {
      setError(true);
    } else {
      setError(false);
      setWelcome(true);
      setTimeout(() => {
        handleFourth();
      }, 2000);
    }
  };

  useEffect(() => {
    if (fingerScan) {
      setWelcome(true);
    } else {
      setWelcome(false);
    }
  }, [fingerScan]);

  const Left = () => {
    return (
      <div className="left basis-2/12 flex flex-col justify-end">
        <div className="user bg-red-600 flex items-center basis-[15%]">
          <img
            className="rounded-full w-1/2 h-full basis-1/4"
            src={profile}
            alt="profile"
          />
          <p className="basis-3/4 text-xxs text-white overflow-hidden">
            Jayesh Choudhary
          </p>
        </div>
        <div className="user flex items-center basis-[15%] gap-1">
          <img
            className="rounded-full w-[45%] h-4/5 basis-1/4"
            src={user}
            alt="user profile"
          />
          <p className="basis-3/4 text-xxs text-white overflow-hidden">
            Other User
          </p>
        </div>
      </div>
    );
  };

  const Right = () => {
    return (
      <div className="right basis-2/12 flex flex-col justify-end">
        <div className="basis-[10%] flex items-end cursor-pointer ml-auto text-slate-300 xs:gap-1 md:gap-2">
          <i title="Internet" className="fa fa-wifi hover:text-white "></i>
          <i
            title="Battery"
            className="fa fa-battery-full hover:text-white"
          ></i>
          <i
            title="Power"
            className="fa fa-power-off hover:text-white"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  };

  return (
    <div className="screen3 bg-cover bg-coverBlur bg-no-repeat bg-center h-full w-full flex p-[1%]">
      <Left />
      <div className="middle basis-8/12 text-white flex flex-col justify-center gap-2 items-center">
        <img
          className="rounded-full w-[20%] h-1/4"
          src={profile}
          alt="profile"
        />
        <h1>Jayesh Choudhary</h1>

        {welcome && (
          <>
            <i className="fa fa-smile-o" aria-hidden="true"></i>
            <h1>Hello!</h1>
            <div className="welcome flex gap-2 items-center">
              <svg
                role="status"
                className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <h1>Welcome</h1>
            </div>
          </>
        )}

        {!welcome && (
          <>
            <p
              className={`${
                error ? "visible" : "invisible"
              } text-red-700 text-xs bg-white rounded-md px-1`}
            >
              Password is incorrect
            </p>
            <div className="password flex justify-center">
              <input
                className={`${
                  error ? " border-red-700" : "border-gray-400"
                } w-[55%] h-5 border-2 text-black text-sm outline-none`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className="fa fa-eye bg-black border border-gray-400 hover:border-white active:border-white active:scale-110"
                aria-hidden="true"
              ></i>
              <i
                onClick={onSubmit}
                className="fa fa-arrow-circle-right border border-gray-400 bg-black hover:border-white active:scale-110"
              ></i>
            </div>

            <div className="signinOptions flex flex-col gap-2">
              <p className="text-xs">Sign-in options</p>

              <div className="keyandfinger flex justify-center">
                <i
                  className="fa fa-key bg-slate-800 p-[2%] border-2 border-transparent hover:border-white active:border-white active:scale-110"
                  aria-hidden="true"
                ></i>
                <span className="bg-slate-800 p-[2%] border-2 border-transparent hover:border-white active:border-white active:scale-110">
                  <BiFingerprint />
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <Right />
    </div>
  );
};

export default Screen3;
