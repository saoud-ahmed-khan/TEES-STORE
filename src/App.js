import React from 'react';
import { Nav } from "./components/NAVBAR/Nav";
import './App.css';
import { Home } from "../src/pages/Home";
import { Footer } from "../src/components/footer/Footer";
import { Products } from "./components/products/Products";

function App() {
  return (
    <React.Fragment>
     <Nav/>
     <Home/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
