import React from "react"
import {Cards} from "./Styles"
import { FlexStyle } from "./FlexStyle"

function Services (props, imgUrl){
    return(
        <FlexStyle>
            <Cards imgUrl = {props.service.imgUrl}>
                <div className='card'>
                    <div className='caption_container'><span></span></div>
                        <div className = 'card_text'>
                            <span className='caption'>{props.service.caption}</span>
                            <button>{props.service.readMore}</button>
                        </div>
                    </div>
                
            </Cards>  
        </FlexStyle>  
    )
}


export default Services