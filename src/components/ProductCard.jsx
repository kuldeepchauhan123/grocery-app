import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import proImg01 from "../images/product-1-1.jpg";

import proHoverImg01 from "../images/product-1-2.jpg";

import { Link } from "react-router-dom";
import "./ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { GoEye } from "react-icons/go";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "tippy.js/animations/scale.css";
import StarRating from "./StarRating";

import { useDispatch } from "react-redux";
import { addCart } from "../store/Cartslice";

const ProductCard = ({ items = [], slice = [] }) => {
  
  const dispatch = useDispatch();

  const handleCart = (item)=>{
    dispatch(addCart(item));
  }

  return (
    <>
      {items.slice(slice[0], slice[1]).map((item, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
          <div className="proCardWrapper">
            <div className="proImgAction">
              <div className="proImg">
                <Link to="/">
                  <img className="defaultImg" src={item.image} />
                  <img className="hoverImg" src={item.image} />
                </Link>
              </div>
              <div className="proAction">
                <ul>
                  <li>
                    <Tippy
                      interactive={true}
                      animation={"scale"}
                      theme={"green"}
                      content={"Wishlist"}
                    >
                      <Link>
                        <CiHeart />
                      </Link>
                    </Tippy>
                  </li>
                  <li>
                    <Tippy
                      interactive={true}
                      animation={"scale"}
                      theme={"green"}
                      content={"Compare"}
                    >
                      <Link>
                        <IoIosGitCompare />
                      </Link>
                    </Tippy>
                  </li>
                  <li>
                    <Tippy
                      interactive={true}
                      animation={"scale"}
                      theme={"green"}
                      content={"Quick View"}
                    >
                      <Link>
                        <GoEye />
                      </Link>
                    </Tippy>
                  </li>
                </ul>
              </div>
              <div className="proBadge">
                <span className="bg-danger">{"Hot"}</span>
              </div>
            </div>
            <div className="proContentWrapper">
              <small className="proCat">
                <Link to="/">{item.category}</Link>
              </small>
              <div className="proTitle">
                <Link to="/">{item.title}</Link>
              </div>
              <small className="proRating">
                <StarRating star={item.rating.rate} />
              </small>
              <small className="proCompany">
                By <span className="text-success fw-semibold">NestFood</span>
              </small>
              <div className="proFooter">
                <div>
                  <span className="proNewPrice">$ {item.price}</span>
                  <span className="proOldPrice">
                    $ {(item.price + 12).toFixed(2)}
                  </span>
                </div>
                <div>
                  <button onClick={()=> handleCart(item)}>
                    <IoCartOutline /> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
