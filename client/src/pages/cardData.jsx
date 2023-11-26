import React from "react";
import Travel from "../components/Travel";
import { Data } from "../Data"
function cardData() {
  return (
    <div className="cardData-container">
      {Data.map((elt) => (
        <cardData{...elt} />
      ) )}
    </div>
      
  );
}
export default cardData