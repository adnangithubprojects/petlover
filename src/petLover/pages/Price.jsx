import React from "react";
import { PriceData } from "../asset/data/config";
import { PriceCard } from "../component/Card";
import "../style/price.css";

export default function Price() {
  return (
    <>
      <div className="Price__Container ">
        <h2 className="text-green-600 text-lg sm:text-2xl font-bold">
          Price Plan
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-bold">
          Choose The <span className="text-orange-700">Best Price</span>
        </h1>
        <div className="flex flex-wrap overflow-hidden gap-6 justify-center">
          {PriceData.map((it) => {
            return (
              <>
                <PriceCard
                  image={it.image}
                  price={it.price}
                  quality={it.quality}
                  care1={it.care1}
                  care2={it.care2}
                  care3={it.care3}
                  care4={it.care4}
                  btn={it.btn}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
