import React from "react"
import {Cards} from "./Styles"

function Services (props, imgUrl){
    return(
        <Cards imgUrl = {props.service.imgUrl}>
            <div className='card'>
                <div className='caption_container'><span></span></div>
                    <div className = 'card_text'>
                        <span className='caption'>{props.service.caption}</span>
                        <button>{props.service.readMore}</button>
                    </div>
                </div>
            
        </Cards>  
    )
}


export default Services