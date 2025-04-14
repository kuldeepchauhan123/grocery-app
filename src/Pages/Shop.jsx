import React,{ useState, useEffect} from "react";

import InnerBanner from "../components/InnerBanner";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import ProductCard from "../components/ProductCard";

import widgetBanner from "../images/widget-banner.png";

const Shop = () => {
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
      <main>
        <InnerBanner />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-1-5">
              <div>
                <div className="mb-5">
                  <CategoryFilter />
                </div>
                <div className="mb-5">
                  <PriceFilter />
                </div>
                <div
                  className="widget-banner p-5 position-relative rounded-3 overflow-hidden"
                  style={{ height: 320 }}
                >
                  <img
                    className="position-absolute top-0 start-0 shadow-sm"
                    src={widgetBanner}
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className="position-relative pt-4 fw-bold fs-4">
                    Save 17%
                    <br /> on <span className="text-success">Organic</span>
                    <br /> Juice
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4-5">
              <div className="row">
                <ProductCard items={products} slice={[0, 12]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
