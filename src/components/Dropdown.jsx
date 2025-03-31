import React from "react";

const Dropdown = ({ data }) => {
  return (
    <>
      <ul className="dropdown">
        {data.map((item, index) => (
          <li className="dropdown-list" key={index}>
            {item.icon} {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
