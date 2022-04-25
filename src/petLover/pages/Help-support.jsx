import React from "react";
import "../style/navbar.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
export default function Help({ icon }) {
  const iconStyl = {
    hover:
      "border border-orange-600 p-2 cursor-pointer rounded-[50%] text-orange-600 hover:text-slate-300 hover:bg-orange-500 text-xl",
  };
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-around md:justify-between items-center h-20 md:h-10 px-2 sm:px-16 text-lg text-white bg-green-500 w-full">
        <div className="flex gap-2 sm:gap-6 cursor-pointer">
          <p>FAQs</p>
          <p>| Help</p>
          <p>| Support</p>
        </div>
        <div className="flex gap-6 ">
          <span className="Help__icn">
            <FaFacebook />
          </span>

          <span className="   Help__icn">
            <FaTwitter />
          </span>
          <span className="   Help__icn">
            <FaLinkedin />
          </span>

          <span className="  Help__icn">
            <FaInstagram />
          </span>
          <span className="   Help__icn">
            <FaYoutube />
          </span>
        </div>
      </div>
    </>
  );
}
