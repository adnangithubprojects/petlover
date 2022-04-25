import React from "react";
import blog1 from "../asset/images/user.jpg";

export default function Comment() {
  return (
    <>
      <div>
        <div className=" bg-slate-200 py-8 w-full md:w-[700px] md:h-[200px]    px-4 ">
          <img
            src={blog1}
            alt="upload image"
            className="w-16 h-16 rounded mr-1 md:mr-3 mt-2 float-left"
          />
          <div className=" flex flex-col md:gap-6">
            <h1 className="font-bold text-lg">John Doe</h1>
            <p className="text-sm md:text-base  md:w-[500px] text-justify text-gray-500">
              Conset elitr erat vero labore dolor ipsum et diam, tempor eos
              dolor conset lorem ipsum, ipsum ipsum sit no ut est. Guber ea
              ipsum erat conset magna kasd amet est magna elitr ea sit justo
              sed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export function Comment1({ size }) {
  const bgSize = {
    small: "w-[300px] sm:w-[500px] md:w-[600px] lg:w-[650px]",
    medium: "w-full md:w-[700px] ",
  };

  return (
    <>
      <div>
        <div className={`${bgSize[size]} sm:h-[200px]  px-4 py-8`}>
          <img
            src={blog1}
            alt="upload image"
            className="w-14 h-14 rounded-md mr-1 md:mr-3  mt-2 float-left"
          />
          <div className=" flex flex-col gap-2 ">
            <h1 className="font-bold text-lg">John Doe</h1>
            <p className="text-sm md:text-base text-justify text-gray-500">
              Conset elitr erat vero labore dolor ipsum et diam, tempor eos
              dolor conset lorem ipsum, ipsum ipsum sit no ut est. Guber ea
              ipsum erat conset magna kasd amet est magna elitr ea sit justo
              sed.
            </p>
            <button className="h-8 w-12 hover:bg-slate-300 rounded">
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
