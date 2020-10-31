import React from 'react'
import { CardData} from "./../CardData/CardData";
import ptees from "./../../pics/pink tees.json";
import sale from "./../../pics/sale.json";
import pmeasurement from "./../../pics/pink measurement.json";
import "./../card.css"
export const CardSection = () => {
   
    return (
        <div>
          
        <div className="allcources">
            <CardData pic={ptees} name="SUPER TEES" />
            <CardData pic={sale} name="WINTER SALE" />
            <CardData pic={pmeasurement} name="ACCURATE MEASUREMENT" />
        </div>
       
        </div>
    )
}