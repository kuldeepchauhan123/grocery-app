import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerslider1 from "../images/bannerslider1.png";
import bannerslider2 from "../images/bannerslider2.png";
import "./BannerSlider.css";
import NewsLetter from "./NewsLetter";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
  };
  return (
    <>
      <div className="container-fluid mt-4" id="banner-slider">
        <div className="row">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={bannerslider1} width={"100%"} />
              <div className="slider-content">
                <h2>Fresh Vegetables Big Discount</h2>
                <p>Save upto 50% off on your first order</p>
              </div>
            </div>
            <div className="slider-item">
              <img src={bannerslider2} width={"100%"} />
              <div className="slider-content">
                <h2>Don't Miss Amazing Deals</h2>
                <p>Signup for the daily news letter</p>
              </div>
            </div>
          </Slider>
          <div className="news-wrapper">
            <NewsLetter />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
