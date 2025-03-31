import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BannerSlider from "./components/BannerSlider";
import FeaturedCategories from "./components/FeaturedCategories";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="/"  element={<Navbar/>}/>
        </Routes>
        <Navbar/>
        <BannerSlider/>
        <FeaturedCategories/>
        <FeaturedProducts/>
      </BrowserRouter>
    </>
  );
}

export default App;
