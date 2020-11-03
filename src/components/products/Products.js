import React from 'react'
import { tishirts } from "./ProductTemplate";
import { ProductTemplate } from "./ProductTemplate";
export const Products = () => {
    
    return (

     <div>
         {
             tishirts.map((tees)=>{return(<ProductTemplate image={tees.pic}/>);})
         }
     </div>

    )
}
