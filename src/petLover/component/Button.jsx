import React from "react";
import "../style/button.css";
export default function Button({
  btnName,
  width = "w-[500px]",
  color = "bg-orange-400",
}) {
  const widthClass = {
    small: "w-[130px]",
    smalla: "w-[130px] ",
    medium: "w-[200px]",
    large: "lg:w-[350px] md:w-[280px]",
    extraLarge: "w-[500px]",
  };
  const colorClass = {
    primary: "btn",
    secondary: "btn1 ",
  };

  return (
    <div>
      <button className={`${colorClass[color]}  ${widthClass[width]}`}>
        {btnName}
      </button>
    </div>
  );
}
