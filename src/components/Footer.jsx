import React from "react";
import FeaturedSection from "./FeaturedBox";
import FeaturedBox from "./FeaturedBox";
import featuredIcon1 from "../images/featured-icon1.svg";
import featuredIcon2 from "../images/featured-icon2.svg";
import featuredIcon3 from "../images/featured-icon3.svg";
import featuredIcon4 from "../images/featured-icon4.svg";
import featuredIcon5 from "../images/featured-icon5.svg";
import NewsLetterSection from "./NewsLetterSection";
const Footer = () => {
  return (
    <>
      <footer>
        <NewsLetterSection />
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between">
              <FeaturedBox
                img={featuredIcon1}
                title={"Best price & offers"}
                tagline={"Orders $50 or more"}
              />
              <FeaturedBox
                img={featuredIcon2}
                title={"Free delivery"}
                tagline={"24/7 amazing services"}
              />
              <FeaturedBox
                img={featuredIcon3}
                title={"Great daily deal"}
                tagline={"When you sign up"}
              />
              <FeaturedBox
                img={featuredIcon4}
                title={"Wide assortment"}
                tagline={"Mega Discounts"}
              />
              <FeaturedBox
                img={featuredIcon5}
                title={"Easy returns"}
                tagline={"Within 30 days"}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
