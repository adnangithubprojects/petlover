import React from "react";
import { ServicesData } from "../asset/data/config";
import Card from "../component/Card";
import "../style/services.css";

export default function Services() {
  return (
    <>
      <div className="Services__Container ">
        <h2 className="text-green-600 text-lg sm:text-2xl font-bold">
          Our Services
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-bold">
          <span className="text-orange-700">Premium</span> Pet Services
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {ServicesData.slice(0, 6).map((it) => {
            return (
              <>
                <Card image={it.image} name={it.title} para={it.message} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
