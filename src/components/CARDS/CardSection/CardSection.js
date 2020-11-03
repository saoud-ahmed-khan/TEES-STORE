import React from 'react'
import { CardData} from "./../CardData/CardData";
import ptees from "./../../pics/pink tees.json";
import sale from "./../../pics/sale.json";
import pmeasurement from "./../../pics/pink measurement.json";
import "./../card.css"
import Aos from "aos";
import "aos/dist/aos.css"
       

export const CardSection = () => {
    React.useEffect(()=>{
        Aos.init({duration:1000});
    })
   
    return (
        
          
        <div className="allcources">
           <div data-aos="fade-right"> <CardData pic={ptees} name="ALL SEASONS" /></div>
           <div   data-aos="zoom-in"><CardData pic={sale} name="WINTER SALE" /></div>
           <div data-aos="fade-left"><CardData pic={pmeasurement} name=" MEASUREMENT" /></div>
        </div>
       
    )
}