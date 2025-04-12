import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import ProductCard from "../components/ProductCard";

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

const ProductDetail = () => {
  const [zoomImg, setZoomImg] = useState(mainproduct1);
  const [counter, setCounter] = useState(1);
  const [activeTab, setActiveTab] = useState(0);   

  const sliderRef2 = useRef();
  const sliderRef = useRef();

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    arrows: false,
    autoplay: false,
    fade: false,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  var related = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
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

  const GoTo = (img, index) => {
    setTimeout(() => {
      setZoomImg(img);
    }, 500);
    sliderRef.current.slickGoTo(index);
    sliderRef2.current.slickGoTo(index);
  };

  const handleIncrement = () => {
    if (counter !== 10) {
      setCounter(counter + 1)
    }
  };
  const handleDecrement = () => {
    if (counter !== 1) {
      setCounter(counter - 1)
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
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-5 mt-5">
                <div className="zoomimg border overflow-hidden rounded-3">
                  <Slider {...settings2} ref={sliderRef2}>
                    {images.map((img, index) => (
                      <div className="item" key={index}>
                        <InnerImageZoom
                          src={zoomImg}
                          zoomType="hover"
                          fullscreenOnMobile="true"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <Slider
                  {...settings}
                  className="zoomSlider mt-3"
                  ref={sliderRef}
                >
                  {images.map((img, index) => (
                    <div className="item" key={index}>
                      <img
                        src={img}
                        width={100}
                        onClick={() => GoTo(img, index)}
                      />
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
                      <button onClick={handleDecrement}>
                        <MdOutlineKeyboardArrowDown />
                      </button>
                      <input type="text" value={counter} />
                      <button onClick={handleIncrement}>
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
                      <tbody>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="tab-wrapper border rounded-4 p-5">
              <ul className="list-unstyled custom-tab">
                <li
                  className={`${activeTab === 0 && "active"}`}
                  onClick={() => setActiveTab(0)}
                >
                  Description
                </li>
                <li
                  className={`${activeTab === 1 && "active"}`}
                  onClick={() => setActiveTab(1)}
                >
                  Additional Info
                </li>
                <li
                  className={`${activeTab === 2 && "active"}`}
                  onClick={() => setActiveTab(2)}
                >
                  Reviews (0)
                </li>
              </ul>
              <div className="tab-content-wrapper mt-5">
                {activeTab === 0 && (
                  <div className="tab-content-inner">
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p>
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <table className="tab-table table mt-4">
                      <tbody>
                        <tr>
                          <td>Type Of Packing</td>
                          <td>:</td>
                          <td>Bottle</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>:</td>
                          <td>Green, Pink, Powder Blue, Purple</td>
                        </tr>
                        <tr>
                          <td>Quantity Per Case</td>
                          <td>:</td>
                          <td>1000 ml</td>
                        </tr>
                        <tr>
                          <td>Piece In One</td>
                          <td>:</td>
                          <td>Carton</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <p>
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </p>
                    <h4 className="fw-semibold">Packaging & Delivery</h4>
                    <hr />
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p>
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <h4 className="fw-semibold">Warnings</h4>
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="tab-content-inner">
                    <table className="tab-table">
                      <tbody>
                        <tr>
                          <th>Stand Up</th>
                          <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                        </tr>
                        <tr>
                          <th>Folded (w/o wheels)</th>
                          <td>32.5″L x 18.5″W x 16.5″H</td>
                        </tr>
                        <tr>
                          <th>Folded (w/ wheels)</th>
                          <td>32.5″L x 24″W x 18.5″H</td>
                        </tr>
                        <tr>
                          <th>Door Pass Through</th>
                          <td>24</td>
                        </tr>
                        <tr>
                          <th>Frame</th>
                          <td>Aluminum</td>
                        </tr>
                        <tr>
                          <th>Weight (w/o wheels)</th>
                          <td>20 LBS</td>
                        </tr>
                        <tr>
                          <th>Weight Capacity</th>
                          <td>60 LBS</td>
                        </tr>
                        <tr>
                          <th>Width</th>
                          <td>24″</td>
                        </tr>
                        <tr>
                          <th>Handle height (ground to handle)</th>
                          <td>37-45″</td>
                        </tr>
                        <tr>
                          <th>Wheels</th>
                          <td>12″ air / wide track slick tread</td>
                        </tr>
                        <tr>
                          <th>Seat back height</th>
                          <td>21.5″</td>
                        </tr>
                        <tr>
                          <th>Head room (inside canopy)</th>
                          <td>25″</td>
                        </tr>
                        <tr>
                          <th>Color</th>
                          <td>Black, Blue, Red, White</td>
                        </tr>
                        <tr>
                          <th>Size</th>
                          <td>M, S</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="tab-content-wrapper">
                    <h4>No reviews here to show.</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h3 className="heading-underline">Related Products</h3>
            <Slider {...related} className="bestSells-Slider mt-4">
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

export default ProductDetail;
