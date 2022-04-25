import React, { useContext } from "react";
import { BioData } from "./Index";

export default function ComC() {
  const name = useContext(BioData);
  return <div>Comd {name}</div>;
}
