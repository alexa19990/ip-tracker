import React, { useEffect, useState } from "react";
import patternIcon from "./assets/images/pattern-bg-desktop.png";
import arrowIcon from "./assets/images/icon-arrow.svg";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [ip, setIp] = useState("");

  const getHandler = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_cK69z3PtZ5J2Tz96gGkesL8yTCOFa&ipAddress=${value}`
      )
      .then((res) => {
        console.log(res.data);
        setIp(res.data);
      });
  };

  return (
    <div className="flex justify-center p-0">
      <img src={patternIcon} alt="" className="w-full absolute z-0" />
      <div className="text-center mt-20 relative z-1">
        <h1 className="text-3xl text-white font-medium uppercase">
          Ip Address Tracker
        </h1>
        <div className="my-20">
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            className=" rounded-l-xl h-16 px-10 outline-none"
            placeholder="Enter your ip address..."
          />
          <button
            onClick={getHandler}
            className="bg-black rounded-r-xl h-16 px-5 relative z-1 top-0.5"
          >
            <img className="relative z-2 p-0 m-0" src={arrowIcon} alt="" />
          </button>
        </div>
        <div className="flex flex-row gap-20 text-start mt-5 bg-white p-10 rounded-xl">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 uppercase tracking-wider">ip address</p>
            <h1 className="text-3xl font-medium">{ip ? ip.ip : ""}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 uppercase tracking-wider">location</p>
            <h1 className="text-3xl font-medium">
              {ip ? ip.location.region : ""}
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 uppercase tracking-wider">timezone</p>
            <h1 className="text-3xl font-medium">
              {ip ? `UTC- ${ip.location.timezone}` : ""}
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 uppercase tracking-wider">isp</p>
            <h1 className="text-3xl font-medium">{ip ? ip.isp : ""}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
