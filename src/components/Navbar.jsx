import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import "./navbar.css";
import { Link } from "react-router-dom";
import { PiHeadphones } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import bannerMenu from '../images/banner-menu.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="border sticky-top bg-white">
        <div className="container-fluid">
          <div className="row align-items-center justify-space-between position-relative">
            <div className="col-lg-3">
              <div>
                <button className="green-btn px-3 py-2 text-white rounded-1 border-0 fw-semibold">
                  <IoGridOutline /> Browse All Categories{" "}
                  {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="navlink-wrapper">
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/home"}>About</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="position-static">
                  <Link>Mega-Menu <IoIosArrowDown /></Link>
                  <div className="mega-menu dropmenu p-3">
                     <div className="row">
                        <div className="col">
                           <h6 className="fw-bold green">Fruit & Vegetables</h6>
                           <ul className="ps-0">
                              <li className="mm-list"><Link>Meat & Poultry</Link></li>
                              <li className="mm-list"><Link>Fresh Vegetables</Link></li>
                              <li className="mm-list"><Link>Herbs & Seasonings</Link></li>
                              <li className="mm-list"><Link>Cuts & Sprouts</Link></li>
                              <li className="mm-list"><Link>Packeged Produce</Link></li>
                           </ul>
                        </div>
                        <div className="col">
                           <h6 className="fw-bold green">Breakfast & Dairy</h6>
                           <ul className="ps-0">
                              <li className="mm-list"><Link>Meat & Poultry</Link></li>
                              <li className="mm-list"><Link>Fresh Vegetables</Link></li>
                              <li className="mm-list"><Link>Herbs & Seasonings</Link></li>
                              <li className="mm-list"><Link>Cuts & Sprouts</Link></li>
                              <li className="mm-list"><Link>Packeged Produce</Link></li>
                           </ul>
                        </div>
                        <div className="col">
                           <h6 className="fw-bold green">Meat & Seafood</h6>
                           <ul className="ps-0">
                              <li className="mm-list"><Link>Meat & Poultry</Link></li>
                              <li className="mm-list"><Link>Fresh Vegetables</Link></li>
                              <li className="mm-list"><Link>Herbs & Seasonings</Link></li>
                              <li className="mm-list"><Link>Cuts & Sprouts</Link></li>
                              <li className="mm-list"><Link>Packeged Produce</Link></li>
                           </ul>
                        </div>                        
                        <div className="col">
                           <img src={bannerMenu} height="250px" />
                        </div>
                     </div>
                  </div>
                </li>
                <li>
                  <Link>Pages <IoIosArrowDown /></Link>
                  <ul className="dropmenu">
                     <li className="dropmenu-list"><Link>Page 1</Link></li>
                     <li className="dropmenu-list"><Link>Page 2</Link></li>
                     <li className="dropmenu-list"><Link>Page 3</Link></li>
                     <li className="dropmenu-list"><Link>Page 4</Link></li>
                     <li className="dropmenu-list"><Link>Page 5</Link></li>
                     <li className="dropmenu-list"><Link>Page 6</Link></li>
                  </ul>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
               <div className="call-number">
               <PiHeadphones />
               <div>
                  <p className="mb-0"><a href="tel:O11-123456789">O11-123456789</a></p>
                  <small>24/7 Support Center</small>
               </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
