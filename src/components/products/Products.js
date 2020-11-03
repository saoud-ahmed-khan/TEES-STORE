import React from 'react'
import { tishirts } from "./ProductTemplate";
import { ProductTemplate } from "./ProductTemplate";
import "./product.css"
export const Products = () => {
    
    return (

     <div className="products">
         
         {
             
             tishirts.map((tees)=>{return(<ProductTemplate key={tees.id} title={tees.title} id={tees.id} price={tees.price} image={tees.pic}/>);})
                
         }
     </div>

    )
}
