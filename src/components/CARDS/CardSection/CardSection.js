import React from 'react'
import { CardData} from "./../CardData/CardData";
import ptees from "./../../pics/pink tees.json";
import sale from "./../../pics/sale.json";
import pmeasurement from "./../../pics/pink measurement.json";
import "./../card.css"
export const CardSection = () => {
   
    return (
        
          
        <div className="allcources">
            <CardData pic={ptees} name="ALL SEASONS" />
            <CardData pic={sale} name="WINTER SALE" />
            <CardData pic={pmeasurement} name=" MEASUREMENT" />
        </div>
       
    )
}