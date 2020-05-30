import React from "react"
import {HeroStyle} from "./HeroStyle"
function Hero ({ title, subText, height, img, mobileHeight}){
        return(

            <HeroStyle height={height} img={img} mobileHeight={mobileHeight}>
                <div class="hero-text">
                    <h1>{title}</h1>
                    <p>{subText}</p>
                </div>
            </HeroStyle>
            
        )
    }

export default Hero