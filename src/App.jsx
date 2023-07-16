import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/ProductList" element={<ProductList/>}/>
        </Routes>
        </BrowserRouter>
     </>
  )
};

export default App;