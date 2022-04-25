import React from "react";
import img1 from "../asset/images/about-1.jpg";
import img2 from "../asset/images/about-2.jpg";
import img3 from "../asset/images/about-3.jpg";
import { FaCheckDouble } from "react-icons/fa";
import Button from "../component/Button";
import "../style/about.css";
export default function About() {
  return (
    <>
      <div className="About">
        <div className="About__left">
          <h2 className="font-bold text-green-600 text-lg sm:text-2xl">
            About Us
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            <span className="text-orange-600">Boarding</span> &
            <span className="text-green-600"> DayCare</span>{" "}
          </h1>
          <h2 className="text-gray-600 font-bold">
            Amet stet amet ut. Sit no vero vero no dolor. Sed erat ut sea. Just
            clita ut stet kasd at diam sit erat vero sit.
          </h2>
          <p className="text-gray-400">
            Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
            sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor
            sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo
          </p>
          <div className="flex flex-col font-bold">
            <p className="flex items-center gap-1">
              <span className="text-green-600">
                <FaCheckDouble />
              </span>
              Best In Industry
            </p>
            <p className="flex items-center gap-1">
              <span className="text-green-600">
                <FaCheckDouble />
              </span>{" "}
              Emergency Services
            </p>
            <p className="flex items-center gap-1">
              <span className="text-green-600">
                <FaCheckDouble />
              </span>
              24/7 Customer Support
            </p>
          </div>
          <Button btnName="Learn More" width="small" color="primary" />
        </div>
        <div className="About__right">
          <div className="flex flex-col">
            <img src={img1} alt="upload img" className="w-[368px] h-[245px]" />
          </div>
          <div className="flex">
            <img
              src={img2}
              alt="upload img"
              className="w-[184px] overflow-hidden h-[141px]"
            />
            <img
              src={img3}
              alt="upload img"
              className="w-[184px] overflow-hidden h-[141px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
