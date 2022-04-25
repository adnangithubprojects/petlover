import React, { useState, useEffect } from "react";
import { HeadData } from "../asset/data/config";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "../component/Button";
import "../style/head.css";
export default function Head() {
  const [Count, setCount] = useState(0);
  const value = HeadData[Count];
  function forword() {
    const next = Count + 1;
    const len = HeadData.length;
    if (next == len) {
      setCount(0);
    } else {
      setCount(next);
    }
  }

  function backword() {
    const prev = Count - 1;
    const len = HeadData.length;
    if (prev < 0) {
      setCount(len - 1);
    } else {
      setCount(prev);
    }
  }

  useEffect(() => {
    const set = setTimeout(() => {
      forword();
    }, 2000);
    return () => clearTimeout(set);
  }, [Count]);

  return (
    <>
      <div className="relative h-auto overflow-hidden">
        <img
          src={value.image}
          alt="upload image"
          className="h-full w-full bg-slate-500 opacity-90"
        />
        <div className="bgimg absolute top-0 left-0">
          <div
            onClick={backword}
            className="absolute left-24 font-bold hidden lg:flex text-3xl md:mr-4 bg-orange-400 p-2 rounded hover:bg-orange-500 "
          >
            <FaAngleLeft />
          </div>
          <div className="flex flex-col justify-center items-center text-white pt-12 gap-8">
            <h2 className="text-2xl hidden md:flex font-bold ">
              {value.text}
              {/* Best Pet Services */}
            </h2>
            <h1 className="text-2xl md:text-7xl font-bold">{value.head}</h1>
            <p className="text-xl hidden md:flex font-bold">{value.para}</p>
            <div className="flex gap-2">
              <Button btnName="Book Now" width="small" color="primary" />
              <Button btnName="Learn More" width="small" color="secondary" />
            </div>
          </div>
          <div
            onClick={forword}
            className="absolute right-24 font-bold text-3xl hidden lg:flex md:ml-4 bg-orange-400 p-2 rounded hover:bg-orange-500 "
          >
            <FaAngleRight />
          </div>
        </div>
      </div>
    </>
  );
}
