import React, { useState } from "react";

import logo from "../images/nestlogo.svg";
import "./header.css";
import Dropdown from "./Dropdown";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.Allcart.items);
  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  let toggleDropdown = () => {
    setisOpenDropdown(!isOpenDropdown);
  };

  const accountMenu = [
    {
      id: 1,
      text: "My Account",
      path: "/",
      icon: <CiUser />,
    },
    {
      id: 2,
      text: "Order Tracking",
      path: "/",
      icon: <CiDeliveryTruck />,
    },
    {
      id: 3,
      text: "Wishlist",
      path: "/",
      icon: <CiHeart />,
    },
    {
      id: 4,
      text: "Setting",
      path: "/",
      icon: <GiSettingsKnobs />,
    },
    {
      id: 5,
      text: "Sign Out",
      path: "/",
      icon: <PiSignOut />,
    },
  ];

  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2">
            <div>
              <Link to="/">
                <img src={logo} className="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="search-wrapper border rounded-2">
              <input
                className=""
                type="search"
                placeholder="Search item here..."
              />
              <CiSearch className="search-icon" />
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="iconlist-wrapper">
              <li className="iconlist">
                <span>
                  <CiHeart /> Wishlist
                </span>
              </li>
              <li className="iconlist">
                <Link to="/cart">
                  <span className="position-relative">
                    <CiShoppingCart />
                    Cart{" "}
                    {cartItems.length >= 1 && (
                      <small className="item-badge">{cartItems.length}</small>
                    )}
                  </span>
                </Link>
              </li>
              <li className="iconlist">
                <span onClick={toggleDropdown}>
                  <CiUser />
                  Account{" "}
                  {!isOpenDropdown ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropup />
                  )}
                </span>
                {isOpenDropdown && <Dropdown data={accountMenu} />}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
