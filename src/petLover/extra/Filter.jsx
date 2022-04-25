import React, { useState } from "react";
import { FilterRecord } from "../asset/data/config";

export default function Filter() {
  const [Ffilter, setFfilter] = useState(FilterRecord);

  function abc(opt) {
    const updatData = FilterRecord.filter((it) => {
      return it.option === opt;
    });
    setFfilter(updatData);
  }
  return (
    <>
      {/* <Filtering /> */}
      <div className="flex gap-10 mb-24">
        {Ffilter.map((it) => {
          return (
            <>
              <div className=" w-64">
                <p>{it.id}</p>
                <img src={it.image} className="w-40 h-40" />
                <p>{it.option}</p>
                <p>{it.subtitle}</p>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex  gap-x-6">
        <div>
          <button
            onClick={() => abc("app")}
            className="px-16 py-4 border-2 bg-amber-400 text-white text-2xl font-bold"
          >
            app
          </button>
          <button
            onClick={() => abc("ios")}
            className="px-16 py-4 border-2 bg-slate-500 text-white text-2xl font-bold"
          >
            ios
          </button>
          <button
            onClick={() => abc("web")}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            web
          </button>
          <button
            onClick={() => setFfilter(FilterRecord)}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            all
          </button>
        </div>
      </div>
    </>
  );
}

function Filtering() {
  const [Filter, setFilter] = useState(FilterRecord);

  function abc(opt) {
    const updatData = FilterRecord.filter((it) => {
      return it.option == opt;
    });
  }

  const app = (opt) => {
    setFilter(FilterRecord.filter((it) => it.option == opt));
  };
  const ios = (opt) => {
    setFilter(FilterRecord.filter((it) => it.option == opt));
  };
  const web = (opt) => {
    setFilter(FilterRecord.filter((it) => it.option == opt));
  };
  const all = (opt) => {
    setFilter(FilterRecord.filter((it) => it));
  };

  return (
    <>
      <div className="flex gap-10 mb-24">
        {Filter.map((it) => {
          return (
            <>
              <div className=" w-64">
                <p>{it.id}</p>
                <img src={it.image} className="w-40 h-40" />
                <p>{it.option}</p>
                <p>{it.subtitle}</p>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex  gap-x-6">
        <div>
          <button
            onClick={() => app("app")}
            className="px-16 py-4 border-2 bg-amber-400 text-white text-2xl font-bold"
          >
            app
          </button>
          <button
            onClick={() => ios("ios")}
            className="px-16 py-4 border-2 bg-slate-500 text-white text-2xl font-bold"
          >
            ios
          </button>
          <button
            onClick={() => web("web")}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            web
          </button>
          <button
            onClick={() => all()}
            className="px-16 py-4 border-2 bg-green-500 text-white text-2xl font-bold"
          >
            all
          </button>
        </div>
      </div>
    </>
  );
}
