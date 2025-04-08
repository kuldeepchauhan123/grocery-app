import React from "react";
import { IoCartOutline } from "react-icons/io5";
import proImg01 from "../images/product-1-1.jpg";
// import proImg02 from "../images/product-2-1.jpg";
// import proImg03 from "../images/product-3-1.jpg";
// import proImg04 from "../images/product-4-1.jpg";
// import proImg05 from "../images/product-5-1.jpg";
// import proImg06 from "../images/product-6-1.jpg";
// import proImg07 from "../images/product-7-1.jpg";
// import proImg08 from "../images/product-8-1.jpg";
// import proImg09 from "../images/product-9-1.jpg";
// import proImg010 from "../images/product-10-1.jpg";
import proHoverImg01 from "../images/product-1-2.jpg";
// import proHoverImg02 from "../images/product-2-2.jpg";
// import proHoverImg03 from "../images/product-3-2.jpg";
// import proHoverImg04 from "../images/product-4-2.jpg";
// import proHoverImg05 from "../images/product-5-2.jpg";
// import proHoverImg06 from "../images/product-6-2.jpg";
// import proHoverImg07 from "../images/product-7-2.jpg";
// import proHoverImg08 from "../images/product-8-2.jpg";
// import proHoverImg09 from "../images/product-9-2.jpg";
// import proHoverImg010 from "../images/product-10-2.jpg";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { GoEye } from "react-icons/go";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";
import StarRating from "./StarRating";


const ProductCard = () => {
  return (
    <>
      <div className="proCardWrapper">
        <div className="proImgAction">
          <div className="proImg">
            <Link to="/">
              <img className="defaultImg" src={proImg01} />
              <img className="hoverImg" src={proHoverImg01} />
            </Link>
          </div>
          <div className="proAction">
            <ul>
              <li>
                <Tippy interactive={true} animation={"scale"} theme={"green"} content={"Wishlist"}>
                  <Link>
                    <CiHeart />
                  </Link>
                </Tippy>
              </li>
              <li>
                <Tippy interactive={true} animation={"scale"} theme={"green"} content={"Compare"}>
                  <Link>
                    <IoIosGitCompare />
                  </Link>
                </Tippy>
              </li>
              <li>
                <Tippy interactive={true} animation={"scale"} theme={"green"} content={"Quick View"}>
                  <Link>
                    <GoEye />
                  </Link>
                </Tippy>
              </li>
            </ul>
          </div>
          <div className="proBadge">
            <span className="bg-danger">{"Hot"}</span>
            {/* {product.badge && product.badge === "Hot" ? (
                      <span className="bg-danger">{product.badge}</span>
                    ) : (
                      " "
                    )}
                    {product.badge && product.badge === "Sale" ? (
                      <span className="bg-primary">{product.badge}</span>
                    ) : (
                      " "
                    )}
                    {product.badge && product.badge === "New" ? (
                      <span className="bg-success">{product.badge}</span>
                    ) : (
                      " "
                    )} */}
          </div>
        </div>
        <div className="proContentWrapper">
          <small className="proCat">
            <Link to="/">Snack</Link>
          </small>
          <div className="proTitle">
            <Link to="/">
              Seeds of Change Organic Quinoa, Brown, & Red Rice
            </Link>
          </div>
          <small className="proRating">
            <StarRating star={4}/>
          </small>
          <small className="proCompany">
            By <span className="text-success fw-semibold">NestFood</span>
          </small>
          <div className="proFooter">
            <div>
              <span className="proNewPrice">$ 28.85</span>
              <span className="proOldPrice">$ 32.8</span>
            </div>
            <div>
              <button>
                <IoCartOutline /> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const product = [
//   {
//     id: 1,
//     badge: "Hot",
//     proImg: proImg01,
//     proHoverImg: proHoverImg01,
//     proCat: "Snack",
//     proTitle: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
//     proRating: 4.0,
//     proCompany: "NestFood",
//     proNewPrice: 28.85,
//     proOldPrice: 32.8,
//   },
//   {
//     id: 2,
//     badge: "Sale",
//     proImg: proImg02,
//     proHoverImg: proHoverImg02,
//     proCat: "Hodo Foods",
//     proTitle: "All Natural Italian-Style Chicken Meatballs",
//     proRating: 3.5,
//     proCompany: "Stouffer",
//     proNewPrice: 52.85,
//     proOldPrice: 55.8,
//   },
//   {
//     id: 3,
//     badge: "New",
//     proImg: proImg03,
//     proHoverImg: proHoverImg03,
//     proCat: "Snack",
//     proTitle: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
//     proRating: 4.1,
//     proCompany: "StarKist",
//     proNewPrice: 48.85,
//     proOldPrice: 52.8,
//   },
//   {
//     id: 4,
//     badge: " ",
//     proImg: proImg04,
//     proHoverImg: proHoverImg04,
//     proCat: "Vegetables",
//     proTitle: "Foster Farms Takeout Crispy Classic Buffalo Wings",
//     proRating: 4.0,
//     proCompany: "NestFood",
//     proNewPrice: 17.85,
//     proOldPrice: 19.8,
//   },
//   {
//     id: 5,
//     badge: "Sale",
//     proImg: proImg05,
//     proHoverImg: proHoverImg05,
//     proCat: "Pet Foods",
//     proTitle: "Blue Diamond Almonds Lightly Salted Vegetables",
//     proRating: 4.0,
//     proCompany: "NestFood",
//     proNewPrice: 23.85,
//     proOldPrice: 25.0,
//   },
//   {
//     id: 6,
//     badge: "",
//     proImg: proImg06,
//     proHoverImg: proHoverImg06,
//     proCat: "Hodo Foods",
//     proTitle: "Chobani Complete Vanilla Greek Yogurt",
//     proRating: 4.0,
//     proCompany: "NestFood",
//     proNewPrice: 54.85,
//     proOldPrice: 55.8,
//   },
//   {
//     id: 7,
//     badge: "",
//     proImg: proImg07,
//     proHoverImg: proHoverImg07,
//     proCat: "Meats",
//     proTitle: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
//     proRating: 3.5,
//     proCompany: "NestFood",
//     proNewPrice: 32.55,
//     proOldPrice: 35.8,
//   },
//   {
//     id: 8,
//     badge: "Sale",
//     proImg: proImg08,
//     proHoverImg: proHoverImg08,
//     proCat: "Beauty",
//     proTitle: "Encore Seafoods Stuffed Alaskan Salmon",
//     proRating: 3.2,
//     proCompany: "NestFood",
//     proNewPrice: 35.85,
//     proOldPrice: 37.0,
//   },
//   {
//     id: 9,
//     badge: "Hot",
//     proImg: proImg09,
//     proHoverImg: proHoverImg09,
//     proCat: "Coffes",
//     proTitle: "Gorton’s Beer Battered Fish Fillets with soft paper",
//     proRating: 4.2,
//     proCompany: "Old El Paso",
//     proNewPrice: 23.68,
//     proOldPrice: 25.0,
//   },
//   {
//     id: 10,
//     badge: "",
//     proImg: proImg010,
//     proHoverImg: proHoverImg010,
//     proCat: "Cream",
//     proTitle: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
//     proRating: 4.2,
//     proCompany: "Tyson",
//     proNewPrice: 22.85,
//     proOldPrice: 26.5,
//   },
// ];
export default ProductCard;
