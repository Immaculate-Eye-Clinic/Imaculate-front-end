import React from "react"
import {HeroStyle} from "./HeroStyle"
import { Slide } from 'react-reveal';

function Hero ({ title, subText, height, img, mobileHeight}){
        return(

            <HeroStyle height={height} img={img} mobileHeight={mobileHeight}>
                <div class="hero-text">
                <Slide left cascade> 
                    <h1>{title}</h1>
                </Slide>
                <Slide left cascade> 
                    <p>{subText}</p>
                </Slide>
                </div>
            </HeroStyle>
            
        )
    }

export default Hero