import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from './Pages/Home'
import Shop from './Pages/Shop'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      
        
        <Routes>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/shop"  element={<Shop/>}/>
          <Route path="*"  element={<Error/>}/>
        </Routes>
        <Footer/>
       
        
      </BrowserRouter>
    </>
  );
}

export default App;
