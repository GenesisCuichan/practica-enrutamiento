import React from "react"
import { useParams } from "react-router-dom"

const Draw = () => {
    const { color, alto, ancho } = useParams();
    console.log(color, alto, ancho)

        return(
            <div style={{"backgroundColor":color, "height":alto + "px", "width":ancho +  "px"}}> .</div>
        );
    
    }
export default Draw;