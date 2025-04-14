import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PopularProducts.css";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
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
        <div class="row">
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
        </div>

        
          <div className="row">
            
              <ProductCard items={products} slice={[0, 8]} />
            
          </div>
        </div>
      
    </>
  );
};

export default PopularProducts;
