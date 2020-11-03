import React from 'react'
import { tishirts } from "./ProductTemplate";
import { ProductTemplate } from "./ProductTemplate";
import "./product.css"
export const Products = () => {
    
    return (

     <div className="products">
         
         {
             
             tishirts.map((tees)=>{return(<ProductTemplate  title={tees.title} id={tees.id} price={tees.price} image={tees.pic}/>);})
                
         }
     </div>

    )
}
