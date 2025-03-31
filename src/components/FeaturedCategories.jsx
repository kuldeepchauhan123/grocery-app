import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import category1 from "../images/category1.png";
import category2 from "../images/category2.png";
import category3 from "../images/category3.png";
import category4 from "../images/category4.png";
import category5 from "../images/category5.png";
import category6 from "../images/category6.png";
import category7 from "../images/category7.png";
import category8 from "../images/category8.png";
import category9 from "../images/category9.png";
import category10 from "../images/category10.png";
import category11 from "../images/category11.png";
import "./categoryslider.css";

const FeaturedCategories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <>
      <div className="container-fluid my-5">
        <h3 className="title mb-4">Featured Categories</h3>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {categories.map((item) => (
                <div key={item.id}>
                  <div className="cat-wrapper" style={{ backgroundColor: item.bg}}>
                    <div className="cat-img">
                      <img src={item.image} />
                    </div>
                    <div className="cat-title">{item.catTitle}</div>
                    <div className="cat-quantity">
                      {item.catQnty} <span>Items</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

const categories = [
  {
    id: 1,
    image: category1,
    catTitle: "Cake & Milk",
    catQnty: 26,
    bg: "#f2fce4",
  },
  {
    id: 2,
    image: category2,
    catTitle: "Organic Kiwi",
    catQnty: 28,
    bg: "#FFFCEB",
  },
  {
    id: 3,
    image: category3,
    catTitle: "Peach",
    catQnty: 14,
    bg: "#ecffec",
  },
  {
    id: 4,
    image: category4,
    catTitle: "Red Apple",
    catQnty: 54,
    bg: "#feefea",
  },
  {
    id: 5,
    image: category5,
    catTitle: "Snack",
    catQnty: 56,
    bg: "#fff3eb",
  },
  {
    id: 6,
    image: category6,
    catTitle: "Vegetables",
    catQnty: 72,
    bg: "#fff3ff",
  },
  {
    id: 7,
    image: category7,
    catTitle: "Strawberry",
    catQnty: 39,
    bg: "#f2fce4",
  },
  {
    id: 8,
    image: category8,
    catTitle: "Black Plum",
    catQnty: 120,
    bg: "#feefea",
  },
  {
    id: 9,
    image: category9,
    catTitle: "Custard Apple",
    catQnty: 34,
    bg: "#fffceb",
  },
  {
    id: 10,
    image: category10,
    catTitle: "Coffe & Tea",
    catQnty: 89,
    bg: "#feefea",
  },
  {
    id: 11,
    image: category11,
    catTitle: "Headphone",
    catQnty: 87,
    bg: "#ecffec",
  },
];

export default FeaturedCategories;
