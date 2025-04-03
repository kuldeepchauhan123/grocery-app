import React from "react";

import "./Footer.css"

const Address = (props) => {
  return (
    <>
      <div className="address-wrapper">
        <div className="add-icon">
          {props.icon}
        </div>
        <div className="add-content">
            <span>{props.text}</span>
        </div>
      </div>
    </>
  );
};

export default Address;
