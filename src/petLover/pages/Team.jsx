import React from "react";
import { TeamData } from "../asset/data/config";
import Card, { Team_Card } from "../component/Card";
import "../style/team.css";

export default function Team() {
  return (
    <>
      <div className="Team__Container ">
        <h2 className="text-green-600 text-2xl font-bold">Team Member</h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-black font-bold">
          Meet Our
          <span className="text-orange-700"> Team Member</span>
        </h1>
        <div className="flex flex-wrap gap-6  justify-center">
          {TeamData.map((it) => {
            return (
              <>
                <Team_Card
                  image={it.image}
                  name={it.name}
                  discipline={it.discipline}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
