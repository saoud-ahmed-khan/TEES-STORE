import React from 'react'
import { tishirts } from "./ProductTemplate";
import { ProductTemplate } from "./ProductTemplate";
import { SingleProduct } from "./SingleProduct";
import "./product.css"
import { Route,Routes } from "react-router-dom";
export const Products = () => {
        const{id}=tishirts;
    return (
        
     <div className="products">
         
         {
             
             tishirts.map((tees)=>{return(<ProductTemplate key={tees.id} title={tees.title} id={tees.id} price={tees.price} image={tees.pic}/>);})
                
         }
         

     </div>

    )
}
