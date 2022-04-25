import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import HeadContact from "./Head-Contact";
import Help from "./Help-support";
export default function NavBar() {
  const [Icon, setIcon] = useState(false);
  return (
    <>
      {/* <div>NavBar</div> */}
      <Help />
      <HeadContact />
      <nav>
        <div className="Logo">
          <div className="Logo__container">
            <h1 className="text-3xl italic font-bold ">
              <span className="text-orange-600">Safety</span>First
            </h1>
          </div>
          <div className="Icon__container" onClick={() => setIcon(!Icon)}>
            {!Icon ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        <div>
          <ul
            onClick={() => setIcon(!Icon)}
            className={!Icon ? "menu active " : "menu"}
          >
            <Link to="/" className="focus:text-gray-300 mt-4 ab md:mt-0 ">
              <li>home</li>
            </Link>
            <Link to="/about" className="focus:text-gray-300 ab ">
              <li>about</li>
            </Link>
            <Link to="/services" className="focus:text-gray-300 ab ">
              <li>Services</li>
            </Link>
            <Link to="/price" className="focus:text-gray-300 ab ">
              <li>Price</li>
            </Link>
            <Link to="/booking" className="focus:text-gray-300 ab ">
              <li>Booking</li>
            </Link>
            <Link to="#" className="focus:text-gray-300 ab">
              <li className="flex flex-col   relative">
                <span className="flex items-center md:justify-center gap-3 pb-2">
                  Pages <FaAngleDown />
                </span>
                <ul>
                  <Link to="/blog">
                    <li>Blog</li>
                  </Link>
                  <Link to="/blogdetail">
                    <li>BlogDetails</li>
                  </Link>
                </ul>
              </li>
            </Link>
            <Link to="/contact" className="focus:text-gray-300 ab">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="Navbtn">
          <Button btnName="Get Quote" width="small" color="primary" />
        </div>
      </nav>
    </>
  );
}
