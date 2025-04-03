import React from "react";
import FeaturedSection from "./FeaturedBox";
import FeaturedBox from "./FeaturedBox";
import featuredIcon1 from "../images/featured-icon1.svg";
import featuredIcon2 from "../images/featured-icon2.svg";
import featuredIcon3 from "../images/featured-icon3.svg";
import featuredIcon4 from "../images/featured-icon4.svg";
import featuredIcon5 from "../images/featured-icon5.svg";
import NewsLetterSection from "./NewsLetterSection";
import logo from "../images/nestlogo.svg";
import { Link } from "react-router-dom";
import Address from "./Address";
import "./Footer.css";
import { LuMapPin } from "react-icons/lu";
import { PiHeadphonesLight } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsStopwatch } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

import appStore from "../images/app-store.jpg";
import playStore from "../images/google-play.jpg";
import paymentMethod from "../images/payment-method.png";

const Footer = () => {
  return (
    <>
      <footer>
        <NewsLetterSection />
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between">
              <FeaturedBox
                img={featuredIcon1}
                title={"Best price & offers"}
                tagline={"Orders $50 or more"}
              />
              <FeaturedBox
                img={featuredIcon2}
                title={"Free delivery"}
                tagline={"24/7 amazing services"}
              />
              <FeaturedBox
                img={featuredIcon3}
                title={"Great daily deal"}
                tagline={"When you sign up"}
              />
              <FeaturedBox
                img={featuredIcon4}
                title={"Wide assortment"}
                tagline={"Mega Discounts"}
              />
              <FeaturedBox
                img={featuredIcon5}
                title={"Easy returns"}
                tagline={"Within 30 days"}
              />
            </div>
          </div>
          <div className="row mt-5 mb-3">
            <div className="col-lg-2">
              <div className="ftr-col">
                <Link>
                  <img src={logo} width={"160px"} />
                </Link>
                <small className="fw-medium d-block my-3">
                  Your daily shopping store
                </small>
              </div>
              <Address
                icon={<LuMapPin />}
                text={
                  "5171 W Campbell Ave undefined Kent, Utah 53127 United States."
                }
              />
              <Address
                icon={<PiHeadphonesLight />}
                text={"(+91) - 540-025-124553"}
              />
              <Address icon={<IoPaperPlaneOutline />} text={"sale@nest.com"} />
              <Address
                icon={<BsStopwatch />}
                text={"10:00 - 18:00, Mon - Sat"}
              />
            </div>
            <div className="col-lg-2">
              <div className="ftr-col">
                <h6 className="heading-underline mb-3">Company</h6>
                <ul className="ps-0 list-unstyled ftr-menu">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Support Center</Link>
                  </li>
                  <li>
                    <Link to="/">Delivery Information</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="ftr-col">
                <h6 className="heading-underline mb-3">Account</h6>
                <ul className="ps-0 list-unstyled ftr-menu">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Support Center</Link>
                  </li>
                  <li>
                    <Link to="/">Delivery Information</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="ftr-col">
                <h6 className="heading-underline mb-3">Corporate</h6>
                <ul className="ps-0 list-unstyled ftr-menu">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Support Center</Link>
                  </li>
                  <li>
                    <Link to="/">Delivery Information</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="ftr-col">
                <h6 className="heading-underline mb-3">Popular</h6>
                <ul className="ps-0 list-unstyled ftr-menu">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Support Center</Link>
                  </li>
                  <li>
                    <Link to="/">Delivery Information</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <h6 className="heading-underline mb-3">Install App</h6>
              <div className="app-store">
                <p className="mb-2">From App store or Play store</p>
                <Link>
                  <img src={appStore} />
                </Link>
                <Link>
                  <img src={playStore} />
                </Link>
              </div>
              <div className="payment mt-3">
                <p className="mb-2">Secured Payment Gateways</p>
                <Link>
                  <img src={paymentMethod} />
                </Link>
              </div>
              <div className="ftr-social mt-3">
                <p className="fw-semibold">Follow Us</p>
                <Link to="/"><RiFacebookFill /></Link>
                <Link to="/"><TfiTwitter /></Link>
                <Link to="/"><FaInstagram /></Link>
                <Link to="/"><AiOutlineYoutube /></Link>
                <Link to="/"><FaPinterestP /></Link>
              </div>
            </div>
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12">
              <div className="ftr-btm text-center">
                <p className="mb-0">© 2024, NestShop all rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
