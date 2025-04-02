import React from "react";
import "./NewsLetterSection.css";
import NewsLetter from "./NewsLetter";
import basketMan from "../images/basket-man.png";

const NewsLetterSection = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            <div className="newsletter-inner">
              <div className="newsletter-inner-content">
                <h3>Stay home & get your daily needs from our shop</h3>
                <p>Start You'r Daily Shopping with Nest Mart</p>
                <NewsLetter />
              </div>
              <img src={basketMan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterSection;
