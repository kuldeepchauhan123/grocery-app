import React from "react";
import { Link } from "react-router-dom";
import "./BestSells.css";
import ProductCard from "./ProductCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSells = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    margin: 10,
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between mt-5">
            <h3 className="title mb-4">Daily Best Sells</h3>
            <ul className="d-flex filter-list">
              <li className="active">
                <Link>Featured</Link>
              </li>
              <li>
                <Link>Popular</Link>
              </li>
              <li>
                <Link>New Added</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="best-sell-banner mt-2">
              <div className="best-sell-content">
                <h4>Bring nature into your home</h4>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-9">
            <Slider {...settings} className="bestSells-Slider">
              <div className="col-3 px-2">
                <ProductCard />
              </div>
              <div className="col-3 px-2">
                <ProductCard />
              </div>
              <div className="col-3 px-2">
                <ProductCard />
              </div>
              <div className="col-3 px-2">
                <ProductCard />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSells;
