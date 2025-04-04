import React from "react";

import BannerSlider from "../components/BannerSlider";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import PopularProducts from "../components/PopularProducts";
import BestSells from "../components/BestSells";
import MultiProducts from "../components/MultiProducts";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <FeaturedCategories />
      <FeaturedProducts />
      <PopularProducts />
      <BestSells />
      <MultiProducts />
    </>
  );
};

export default Home;
