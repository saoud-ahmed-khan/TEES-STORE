import React from 'react';
import { Nav } from "./components/NAVBAR/Nav";
import './App.css';
import { Home } from "../src/pages/Home";
import { Footer } from "../src/components/footer/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Products } from "./components/products/Products";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
     <Nav/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>

     </Routes>
     
    <Footer/>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
