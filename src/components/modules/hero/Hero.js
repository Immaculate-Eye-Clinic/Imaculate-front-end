import React from "react"
import {HeroStyle} from "./HeroStyle"
function Hero ({ title, subText}){
        return(

            <HeroStyle>
                <div class="hero-text">
                    <h1>{title}</h1>
                    <p>{subText}</p>
                </div>
            </HeroStyle>
            
        )
    }

export default Hero