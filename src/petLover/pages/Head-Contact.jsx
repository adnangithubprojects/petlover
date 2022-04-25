import React from "react";
import "../style/head-contact.css";
export default function HeadContact() {
  return (
    <>
      <div className="Container">
        <h1 className="Container__logo">
          <span className="text-orange-500">Pet</span>Lover
        </h1>
        <div className="Container__address">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h1>Opening Hours</h1>
            <p className="text-sm md:text-base text-gray-400">
              8.00AM - 9.00PM{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h1>Email Us</h1>
            <p className="text-gray-400">info@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h1>Call Us</h1>
            <p className=" text-gray-400">03021711515 </p>
          </div>
        </div>
      </div>
    </>
  );
}
