import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BestSells.css";
import ProductCard from "./ProductCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSells = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
          <div className="col-lg-3">
            <div className="best-sell-banner mt-2">
              <div className="best-sell-content">
                <h4>Bring nature into your home</h4>
                <button>Shop Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <ProductCard item={products} slice={[0, 4]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSells;
