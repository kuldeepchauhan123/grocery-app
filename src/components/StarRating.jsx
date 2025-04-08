import React from "react";

import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
import {} from "react-icons/fa6";

const StarRating = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar />
        ) : star >= number ? (
          <FaStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return <div className="text-warning">{ratingStar}</div>;
};

export default StarRating;
