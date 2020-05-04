import React from "react"
import {HeroStyle} from "./styles/HeroStyle"
import { QuotesBackground } from "./styles/QuotesBackground"
import {Overlay} from "./styles/Overlay"

class Hero extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(

            <HeroStyle>
                <Overlay>
                    <QuotesBackground>
                        <p>
                            This good news of the Kingdom must be preached in all the inhabited earth, then the end will come. 
                        </p>
                    </QuotesBackground>
                </Overlay>
            </HeroStyle>
            
        )
    }
}

export default Hero