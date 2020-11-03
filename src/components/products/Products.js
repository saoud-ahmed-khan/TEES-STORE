import React from 'react'
import { tishirts } from "./ProductTemplate";
import { ProductTemplate } from "./ProductTemplate";

export const Products = () => {
    
    return (

     <div className="products">
         
         {
             tishirts.map((tees)=>{return(<ProductTemplate className="distance" image={tees.pic}/>);})
         }
     </div>

    )
}
