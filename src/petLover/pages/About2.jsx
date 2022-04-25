import React from "react";
import { BookingData } from "../asset/data/config";
import "../style/about.css";
import img1 from "../asset/images/feature.jpg";
export default function Booking() {
  return (
    <>
      <div className="About2 ">
        <div className="About2__img ">
          <img src={img1} alt="upload img" className=" " />
        </div>
        <div className="flex flex-col justify-evenly pl-2  ">
          <div className="About2__Text">
            <h2 className="text-green-500 text-lg md:text-2xl font-bold">
              Why Choose Us?
            </h2>
            <h1 className="text-black text-2xl md:text-6xl font-bold">
              <span className="text-orange-600 ">Special Care</span> On Pets
            </h1>
            <p className="text-slate-500">
              When got here, I dont think You'll regret think You'll regret When
              got here, I dont think You'll regret think You'll regret think
              You'll regret
            </p>
          </div>
          <div className="About2__Text__Card">
            {BookingData.map((it) => {
              return (
                <>
                  <div className="flex flex-col w-[250px]">
                    <div className="flex gap-2 items-center text-2xl">
                      <p className="flex text-4xl text-green-600">{it.image}</p>
                      <p>{it.title}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
