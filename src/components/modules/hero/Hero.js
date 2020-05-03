import React from "react"
import {HeroStyle} from "./styles/HeroStyle"
import { QuotesBackground } from "./styles/QuotesBackground"

class Hero extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <HeroStyle>
                <QuotesBackground>
                    Test sahvgsasavajhvjasjvjxvhgsxhgchgcxhghg
                </QuotesBackground>
            </HeroStyle>
        )
    }
}

export default Hero