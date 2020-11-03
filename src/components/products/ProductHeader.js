import React from 'react'
import "./product.css"
import { Route,Routes } from "react-router-dom";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProduct";

export const ProductHeader = () => {
    return (

        <div className="ProductHeader">
            <h1>TEES FOR MENS</h1>
            <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path=":id" element={<SingleProduct/>}/>
    </Routes>
        </div>
        
    )
}
