import React from "react";
import { Link } from "react-router-dom";
import "./PopularProducts.css";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="title mb-4">Popular Products</h3>
          <ul className="d-flex filter-list">
            <li className="active">
              <Link>All</Link>
            </li>
            <li>
              <Link>Milk & Dairies</Link>
            </li>
            <li>
              <Link>Coffee & Tea</Link>
            </li>
            <li>
              <Link>Pet Foods</Link>
            </li>
            <li>
              <Link>Meats</Link>
            </li>
            <li>
              <Link>Vegetables</Link>
            </li>
            <li>
              <Link>Fruits</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
