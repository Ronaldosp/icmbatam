import { useState , useEffect } from "react";
import OurLeaders from "../components/OurLeaders";
import Vision from "../components/Vision";
import Values from "../components/Values";

export default function AboutUsPage(){
    
    return(
        <div>
            <OurLeaders/>
            <Vision/>
            <Values/>
        </div>
    )
}