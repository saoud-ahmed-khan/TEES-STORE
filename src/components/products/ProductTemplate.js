import React from 'react'
import "./product.css"

export const ProductTemplate = ({image,title,price}) => {
    return (
        <div className="Product-main">
            <div className="product-image" >
                <img height="100%" width="100%" src={image}/>
            </div>
            <div className="product-title">
                {title}
            </div>
            <div className="product-price">
                Price: $ {price}
            </div>
        </div>
    )
}
