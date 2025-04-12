import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./cart.css";

import StarRating from "../components/StarRating";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, clearCart } from "../store/Cartslice";
import emptyCart from "../images/empty-cart.jpg";

const Cart = () => {
  const [counter, setCounter] = useState(1);

  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  {
    console.log(cartData);
  }

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };
  const handleIncrement = () => {
    if (counter !== 10) {
      setCounter(counter + 1);
    }
  };
  const handleDecrement = () => {
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
                  <Link to="/">Shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {cartData.length <= 0 && (
        <div className="text-center">
          <img src={emptyCart} width={300} />
          <h5>Your shopping cart is empty !</h5>
          <button className="smallBtn mx-auto my-4 p-3" >Continue Shopping</button>
        </div>
      )}

      {cartData.length >= 1 && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 my-4">
              <div className="cart-wrapper">
                <div className="cart-header">
                  <div>
                    <h3 className="fw-semibold mb-0">Cart</h3>
                    <small className="fw-semibold opacity-75">
                      There are{" "}
                      <span className="text-success"> {cartData.length} </span>
                      items in your cart
                    </small>
                  </div>
                  <div
                    className="clear-cart"
                    onClick={() => dispatch(clearCart())}
                  >
                    <RiDeleteBin6Line /> Clear cart
                  </div>
                </div>

                <div className="cart-table">
                  <table>
                    <thead className="thead-dark">
                      <tr>
                        <th>
                          <input className="form-check-input" type="checkbox" />
                        </th>
                        <th>Product</th>
                        <th className="text-center">Unit Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Subtotal</th>
                        <th className="text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td className="d-flex align-items-center gap-3">
                            <div className="cart-img-box">
                              <img src={item.image} />
                            </div>
                            <div className="cart-product-title">
                              <h6>{item.title}</h6>
                              <StarRating star={item.rating.rate} />
                            </div>
                          </td>
                          <td className="text-center opacity-50 ">
                            <h5 className="fw-semibold">${item.price}</h5>
                          </td>
                          <td>
                            <div className="quantity">
                              <button onClick={handleDecrement}>
                                <MdOutlineKeyboardArrowDown />
                              </button>
                              <input type="text" value={counter} />
                              <button onClick={handleIncrement}>
                                <MdOutlineKeyboardArrowUp />
                              </button>
                            </div>
                          </td>
                          <td className="text-center opacity-75">
                            <h5 className="fw-semibold">${item.price}</h5>
                          </td>
                          <td
                            className="text-center opacity-25"
                            onClick={() => handleRemoveCart(item.id)}
                          >
                            <RiDeleteBin6Line size={24} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
