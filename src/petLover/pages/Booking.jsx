import React from "react";
import { BookingData } from "../asset/data/config";
import "../style/booking.css";
export default function Booking() {
  return (
    <>
      <div className="Booking bg-gray-100 pb-8">
        <div className="Booking__Form ">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Reservation Date" />
            <input type="text" placeholder="Reservtion Time" />
            <input type="email" placeholder="Select A Services" />
            <button>Submit Now</button>
          </form>
        </div>
        <div className="flex flex-col justify-evenly pl-2 md:pl-6 pt-6">
          <div className="Booking__Text">
            <h2 className="text-green-500 text-lg md:text-2xl font-bold">
              Going For a Vacation?
            </h2>
            <h1 className="text-black text-2xl md:text-5xl font-bold">
              Book For<span className="text-orange-600 "> Your Pet</span>
            </h1>
            <p className="text-slate-500">
              When got here, I dont think You'll regret think You'll regret
              think You'll regret
            </p>
          </div>
          <div className="Booking__Text__Card">
            {BookingData.map((it) => {
              return (
                <>
                  <div className="flex flex-col w-[250px]">
                    <div className="flex items-center gap-2 text-2xl">
                      <p className="flex text-4xl text-green-600">{it.image}</p>
                      <p>{it.title}</p>
                    </div>
                    <p className="text-slate-500">{it.message}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
