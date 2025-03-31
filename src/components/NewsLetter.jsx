import React from "react";
import "./newsletter.css";
import { IoMdPaperPlane } from "react-icons/io";

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter">
        <IoMdPaperPlane />
        <input type="text" placeholder="Your email address" />
        <button className="btn btn-success btn-rounded">Subscribe</button>
      </div>
    </>
  );
};

export default NewsLetter;
