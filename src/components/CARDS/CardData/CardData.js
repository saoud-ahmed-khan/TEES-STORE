import React from 'react'
import Lottie from "react-lottie";
import "./../card.css" 
export const CardData = (props) => {
    return (
        <div className="coursemain">
            <div>''
            <Lottie options={{ animationData:props.pic , loop: true, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice", }, }}
                height={"100%"}
                width={"100%"}
                style={{
                    width: "100%",
                    height: "400px",
                    maxWidth: "400px",
                }}
            />
           
            </div>
            <div className="title">
            <h1>{props.name}</h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ... A practice not without controvers not content.</p>

            </div>
        </div>
    )
}