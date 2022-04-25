import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="Footer">
        {/* ===============
============LOGO===========
=========================== */}
        <div className="Footer__logo">
          <Link to="/">
            <h1 className="font-bold text-5xl">
              <span className="text-orange-500">Pet</span>Lover
            </h1>
          </Link>
          <p className="">
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link, use a
            button and change it with appropriate styles. button and change it
            with appropriate styles.
          </p>
        </div>
        {/* ===============
============address========
=========================== */}
        <div className="Footer__address">
          <h1>Get In Touch</h1>
          <div>
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt /> 123 Regi Town,Peshwar Pakistan
            </p>
            <p className="flex items-center gap-1">
              <FaPhoneAlt /> 03021711515
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope />
              aadi@gmail.com
            </p>
            <p className="flex pt-2 gap-2">
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaInstagram />
              </span>
            </p>
          </div>
        </div>
        {/* ===============
============Links==========
=========================== */}
        <div className="Footer__links">
          <h1>Popular Links</h1>
          <div>
            <Link to="/" className="flex items-center">
              <FaAngleRight /> Home
            </Link>

            <Link to="/about" className="flex items-center">
              <FaAngleRight /> About
            </Link>

            <Link to="/services" className="flex items-center">
              <FaAngleRight /> Our Services
            </Link>

            <Link to="/blog" className="flex items-center">
              <FaAngleRight /> Blog
            </Link>

            <Link to="/contact" className="flex items-center">
              <FaAngleRight />
              Contact Us
            </Link>
          </div>
        </div>
        {/* ===============
============Contact===========
=========================== */}
        <div className="Footer__contact">
          <h1>Newsletter</h1>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button>Submit Now</button>
          </form>
        </div>
      </div>
      <div>
        <Help />
      </div>
    </>
  );
}

function Help() {
  return (
    <>
      <div className="flex w-full h-full text-lg flex-wrap justify-between px-8 items-center md:h-[70px] bg-black text-white">
        <p>
          &copy; created by
          <span className="text-orange-600 font-bold text-sm md:text-lg">
            <sup> | Adnan Ahmad | </sup>
          </span>
          All right Reserved.
        </p>
        <div className="flex gap-3 justify-evenly items-center w-auto  md:w-[300px]">
          <p>Privacy</p>
          <p>Terms</p>
          <p>FAQs</p>
          <p>Help</p>
        </div>
      </div>
    </>
  );
}
