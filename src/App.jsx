import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Error from './Pages/Error'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetail from "./Pages/ProductDetail"
import Cart from "./Pages/Cart"


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/shop"  element={<Shop/>}/>
          <Route path="/productdetail"  element={<ProductDetail/>}/>
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="*"  element={<Error/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
