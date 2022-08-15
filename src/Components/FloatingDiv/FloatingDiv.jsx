import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ image, text1, text2 }) => {
  
  return (

    // darkMode
    <div className="floatingDiv">
      <img src={image} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
