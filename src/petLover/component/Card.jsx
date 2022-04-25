import React from "react";
import "../style/card.css";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaUser,
  FaFolder,
} from "react-icons/fa";
import Price from "../pages/Price";
export default function Card({ image, name, para }) {
  return (
    <div className="Services">
      <div className="flex flex-col items-center justify-center gap-5 w-[300px]">
        <p className="text-5xl text-green-500">{image}</p>
        <p className="text-3xl font-bold">{name}</p>
        <p>{para}</p>
        <button className="Services__menu__btn">Read More</button>
      </div>
    </div>
  );
}

export function Team_Card({ image, name, discipline }) {
  return (
    <div className="Team__Card">
      <div className="Team__Card__image">{image}</div>
      <div className="Team__Card__menu">
        <p className="font-bold text-xl">{name}</p>
        <p className="text-zinc-400 italic">{discipline}</p>
      </div>
      <div className="Team__Card__icon">
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
      </div>
    </div>
  );
}

export function BlogCard({ image, name, para }) {
  return (
    <div className="Blog1">
      <p>{image}</p>
      <div className="px-4 flex flex-col justify-start items-start gap-2">
        <p className="text-2xl tracking-widest py-2 font-bold">{name}</p>
        <p className="pl- flex text-sm gap-3 ">
          <span>
            <FaUser /> <span> admin </span>
          </span>
          <span>
            <FaFolder />
            Web Design
          </span>
          <span>
            <FaFolder />
            15
          </span>
        </p>
        <p className="text-gray-500">{para}</p>
        <button className="Blog1__menu__btn">Read More</button>
      </div>
    </div>
  );
}

export function PriceCard({
  image,
  quality,
  price,
  care1,
  care2,
  care3,
  care4,
  btn,
}) {
  return (
    <div className="Price">
      <div className="w-full h-[250px] relative">
        <p className="absolute top-0 left-0 z-10 opacity-95 rounded-t-md">
          {image}
        </p>
        <p className="absolute top-2 left-28 text-4xl text-orange-500 font-bold  z-20">
          {quality}
        </p>
        <p className="relative  top-20 left-28 text-white   text-7xl font-bold  z-20">
          <sup className="absolute top-2 -left-4 text-2xl font-normal">$</sup>
          {price}
          <sub className="text-2xl font-normal ">/Mo</sub>
        </p>
      </div>
      <div className="Price__menu ">
        <p className="border-b">{care1}</p>
        <p className="border-b">{care2}</p>
        <p className="border-b">{care3}</p>
        <p>{care4}</p>
        <h2 className="w-full">{btn}</h2>
      </div>
    </div>
  );
}

// export function Review_Card({ image, name, message }) {
//   return (
//     <div className="Review__Card">
//       <p className="text-white text-lg w-[250px]">{message}</p>
//       <div className="Review__Card__image">{image}</div>
//       <div className="Review__Card__menu">
//         <p className="text-lg">{name}</p>
//         <div className="Review__Card__reveiw">
//           <span>
//             <FaStar />
//           </span>
//           <span>
//             <FaStar />
//           </span>
//           <span>
//             <FaStar />
//           </span>
//           <span>
//             <FaStar />
//           </span>
//           <span className="bg-white rounded-[50px]">
//             <FaStarHalf />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
