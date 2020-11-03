import React from 'react'
import "./product.css"
import { Link } from "react-router-dom";
export const tishirts =
        [
            {
                id: 1,
                title: "TEXTURE TEES",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTP101124HGRBLK_1_800x1000_crop_center.jpg?v=1599580652",
                price: "70",

            },
            {
                id: 2,
                title: "POLO TEES",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201055MRNHTG_1_800x1000_crop_center.jpg?v=1599670266",
                price: "59",

            },
            {
                id: 3,
                title: "O NECK",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTP201042CHR_4_800x1000_crop_center.jpg?v=1599580133",
                price: "47",

            },
            {
                id: 4,
                title: "ARMOUR TEES",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201049-OLV_1_dde6f304-638a-4581-9d4f-98b5f1c2f692_800x1000_crop_center.jpg?v=1592900236",
                price: "45",

            },
            {
                id: 5,
                title: "DESIGN POCKET",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTP201056-NVY_800x1000_crop_center.jpg?v=1592900967",
                price: "56",

            },
            {
                id: 6,
                title: "RED FLIER",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTP201064RED_2_800x1000_crop_center.jpg?v=1601360097",
                price: "59",

            },
            {
                id: 7,
                title: "O YELLOW",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201054-MST_800x1000_crop_center.jpg?v=1592392135",
                price: "34",

            },
            {
                id: 8,
                title: "SIDE WHITE",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201046-HTRGRY_800x1000_crop_center.jpg?v=1594475863",
                price: "33",

            },
            {
                id: 9,
                title: "RED STRIPS",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201058-RED_1_800x1000_crop_center.jpg?v=1598519731",
                price: "25",

            },
            {
                id: 10,
                title: "MIND BLACK",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201053BLK.JPG_c83d92be-a18f-4521-8534-0f1996607015_800x1000_crop_center.jpg?v=1595847922",
                price: "45",

            },
            {
                id: 11,
                title: "YELLOW STRIP",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTP201038-MSTBLK_800x1000_crop_center.jpg?v=1598861094",
                price: "34",

            },
            {
                id: 12,
                title: "NASA ",
                pic: "https://cdn.shopify.com/s/files/1/2290/7887/products/MTF201050-WHT_800x1000_crop_center.jpg?v=1598859574",
                price: "63",

            }

        ]
export const ProductTemplate = ({image,title,price,id}) => {
    
    return (
        <div className="Product-main">
            <Link to={`/products/${id}`}
            style={{ textDecoration: 'none' }}

            >
            <div className="product-image" >
                <img alt={title}height="100%" width="100%" src={image}/>
            </div>
            <div className="product-title">
                {title}
            </div>
            <div className="product-price">
                Price: $ {price}
            </div>
            </Link>
        </div>
    )
}
