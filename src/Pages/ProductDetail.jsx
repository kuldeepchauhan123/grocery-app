import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductDetail.css";

import mainproduct1 from "../images/mainproduct-1.jpg";
import mainproduct2 from "../images/mainproduct-2.jpg";
import mainproduct3 from "../images/mainproduct-3.jpg";
import mainproduct4 from "../images/mainproduct-4.jpg";
import mainproduct5 from "../images/mainproduct-5.jpg";
import mainproduct6 from "../images/mainproduct-6.jpg";
import mainproduct7 from "../images/mainproduct-7.jpg";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

import PriceFilter from "../components/PriceFilter";
import CategoryFilter from "../components/CategoryFilter";

import widgetBanner from "../images/widget-banner.png";

const ProductDetail = () => {
  const [zoomImg, setZoomImg] = useState(mainproduct1);
  const [counter, setCounter] = useState(1);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true      
  };

  const images = [
    mainproduct1,
    mainproduct2,
    mainproduct3,
    mainproduct4,
    mainproduct5,
    mainproduct6,
    mainproduct7,
  ];

  const GoTo = (img) => {
    setZoomImg(img);
  };

  const increment = () => {
    if (counter !== 10) {
        setCounter(counter + 1);
    }
    
  };
  const decrement = () => {
    if (counter !== 1) {
        setCounter(counter - 1);
    }
    
  };
  return (
    <>
      <div className="container-fluid border-bottom pt-3 ">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="lh-base">
                    <HiOutlineHome /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/">Vegetables</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Seeds of Change Organic
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5 mt-5">
                <div className="zoomimg border overflow-hidden rounded-3">
                  <InnerImageZoom
                    src={zoomImg}
                    zoomType="hover"
                    fullscreenOnMobile="true"
                  />
                </div>
                <Slider {...settings} className="zoomSlider mt-3">
                  {images.map((img, index) => (
                    <div className="item" key={index}>
                      <img src={img} width={100} onClick={() => GoTo(img)} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="col-md-7 mt-5 ps-4">
                <div className="product-info">
                  <div className="product-title">
                    <h1 className="fw-semibold opacity-75">
                      Seeds of Change Organic Quinoa, Brown
                    </h1>
                  </div>
                  <div className="review">
                    <span>(26 review)</span>
                  </div>
                  <div className="pricebox">
                    <div className="newprice">$38</div>
                    <div className="oldprice">
                      <span className="perOff">26% Off</span>
                      <span className="cutprice">$52</span>
                    </div>
                  </div>
                  <div className="pro-short-des mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam rem officia, corrupti reiciendis minima nisi modi,
                    quasi, odio minus dolore impedit fuga eum eligendi.
                  </div>
                  <div className="btn-wrapper mt-5">
                    <div className="quantity">
                      <button onClick={decrement}>
                        <MdOutlineKeyboardArrowDown />
                      </button>
                      <input type="text" value={counter} />
                      <button onClick={increment}>
                        <MdOutlineKeyboardArrowUp />
                      </button>
                    </div>
                    <div>
                      <button className="add-cart-btn-big">
                        <IoCartOutline /> Add to Cart
                      </button>
                    </div>
                    <div className="wishlist">
                      <button className="wishlist-btn">
                        <IoIosHeartEmpty />
                      </button>
                    </div>
                  </div>
                  <div>
                    <table className="product-table mt-5">
                      <tr>
                        <td>
                          Type: <span>Organic</span>
                        </td>
                        <td>
                          SKU: <span>FWM15VKT</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          MFG: <span>07 March 2025</span>
                        </td>
                        <td>
                          Tags: <span>Snack, Organic, Brown</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Life: <span>60 Days</span>
                        </td>
                        <td>
                          Stock: <span>14 Items in stock</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-5 mt-5">
              <CategoryFilter />
            </div>
            <div className="mb-5">
              <PriceFilter />
            </div>
            <div
              className="widget-banner p-5 position-relative rounded-3 overflow-hidden"
              style={{ height: 350 }}
            >
              <img
                className="position-absolute top-0 start-0 shadow-sm"
                src={widgetBanner}
                width={"100%"}
                height={"100%"}
              />
              <p className="position-relative pt-4 fw-bold fs-4">
                Save 17%
                <br /> on <span className="text-success">Organic</span>
                <br /> Juice
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
