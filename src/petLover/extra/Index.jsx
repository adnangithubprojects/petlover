import React, { createContext } from "react";
import ComA from "./ComA";

export const BioData = createContext();
export default function Index() {
  return (
    <div>
      <BioData.Provider value={"doob maro "}>
        <ComA />
      </BioData.Provider>
    </div>
  );
}
