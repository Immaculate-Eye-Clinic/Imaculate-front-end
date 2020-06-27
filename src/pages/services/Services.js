import React from "react"
import {Cards} from "./Styles"
import {NavLink} from 'react-router-dom'

function Services (props, imgUrl){
    return(
        <Cards imgUrl = {props.service.imgUrl}>
            <div className='card'>
                <div className='caption_container'>
                </div>
                <div className = 'card_text'>
                    <div className='caption'>
                        {props.service.caption}
                        <button>{props.service.readMore}</button>
                    </div>
                    
                </div>
                
            </div>
        </Cards>  
    )
}


export default Services