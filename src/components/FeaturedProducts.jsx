import React from "react";
import featImg1 from "../images/feat-product1.png";
import featImg2 from "../images/feat-product2.png";
import featImg3 from "../images/feat-product3.png";
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const featProducts = [
    {
      id: 1,
      title: "Everyday Fresh & Clean with Our Products",
      btnText: "Shop now",
      image: featImg1,
    },
    {
      id: 2,
      title: "Make your Breakfast Healthy and Easy",
      btnText: "Shop now",
      image: featImg2,
    },
    {
      id: 3,
      title: "The best Organic Products Online",
      btnText: "Shop now",
      image: featImg3,
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {featProducts.map((item) => (
            <div className="col-lg-4 mb-5" key={item.id}>
              <div className="featProduct">
                <img src={item.image}/>
                <div className="featProductContent">
                  <div className="featProductTitle">{item.title}</div>
                  <button>{item.btnText}</button>                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
