import React from "react"
import {HeroStyle} from "./HeroStyle"
import { Bounce } from 'react-reveal';

function Hero ({ title, subText, height, img, mobileHeight}){
        return(

            <HeroStyle height={height} img={img} mobileHeight={mobileHeight}>
                <div class="hero-text">
                <Bounce left cascade> 
                    <h1>{title}</h1>
                </Bounce>
                <Bounce right cascade> 
                    <p>{subText}</p>
                </Bounce>
                </div>
            </HeroStyle>
            
        )
    }

export default Hero