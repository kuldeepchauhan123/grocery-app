import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./cart.css";

import StarRating from "../components/StarRating";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, increaseCart, decreaseCart, clearCart } from "../store/Cartslice";
import emptyCart from "../images/empty-cart.jpg";

const Cart = () => {
  const items = useSelector((state) => state.Allcart.items);
  const cart = useSelector((state) => state.Allcart);
  const dispatch = useDispatch();

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

      {items.length <= 0 && (
        <div className="text-center">
          <img src={emptyCart} width={300} />
          <h5>Your shopping cart is empty !</h5>
          <button className="smallBtn mx-auto my-4 p-3">
            <Link to="/home"> Continue Shopping </Link>
          </button>
        </div>
      )}

      {items.length >= 1 && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 my-4">
              <div className="cart-wrapper">
                <div className="cart-header">
                  <div>
                    <h3 className="fw-semibold mb-0">Cart</h3>
                    <small className="fw-semibold opacity-75">
                      There are{" "}
                      <span className="text-success"> {items.length} </span>
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
                      {items.map((item, index) => (
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
                              <button
                                onClick={() => dispatch(decreaseCart(item.id))}
                              >
                                <MdOutlineKeyboardArrowDown />
                              </button>
                              <input type="text" value={item.cartQuantity} />
                              <button
                                onClick={() => dispatch(increaseCart(item.id))}
                              >
                                <MdOutlineKeyboardArrowUp />
                              </button>
                            </div>
                          </td>
                          <td className="text-center opacity-75">
                            <h5 className="fw-semibold">
                              ${(item.price * item.cartQuantity).toFixed(2)}
                            </h5>
                          </td>
                          <td
                            className="text-center opacity-25"
                            onClick={() => dispatch(removeCart(item.id))}
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
            <div className="col-lg-3 offset-lg-1 my-4">
              <div className="cart-price-wrapper">
                <div className="subTotal">
                  <h5 className="mb-0">Subtotal</h5> <span className="subTotalPrice">${(cart.totalPrice).toFixed(2)}</span>
                </div>
                <div className="shippingFees">
                  <div>
                    <h5 className="mb-2">Shipping fees</h5>
                    <span className="shippingAddress">Delivery to: 12A DLF Gurugram, Haryana</span>
                  </div>
                  <span className="subTotalPrice">$ 2.99</span>
                </div>                
                <div className="total">
                  <h5>Total</h5> <span className="totalPrice">${(cart.totalPrice).toFixed(2)}</span>
                </div>
                <div>
                  <button className="smallBtn w-100 justify-content-center p-3">
                    <Link>Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
