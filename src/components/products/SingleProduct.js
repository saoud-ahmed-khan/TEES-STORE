import React from 'react'
import { useParams } from "react-router-dom";
import { tishirts } from "./ProductTemplate";
import "./product.css"



export const SingleProduct = () => {
    const { id } = useParams();

    var Setdata = tishirts.find((tees) => { return tees.id == id })
    return (
        <div className="SingleProduct-main">
            <div className="SingleProduct-img">
                <img alt={Setdata.title} height="100%" width="100%" src={Setdata.pic} />
            </div>
            <div className="SingleProduct-content">
                <h2>{Setdata.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                    dunt ut labore et dolore magna aliqua. Ut en laboris nisi ut aliquip ex ea commodo consequat
                    . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            </p>
                <h3>$ {Setdata.price}</h3>
            </div>


        </div>
    )
}
