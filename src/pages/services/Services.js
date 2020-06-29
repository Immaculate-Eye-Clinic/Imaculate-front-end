import React from "react"
import {Cards} from "./Styles"
import {NavLink} from 'react-router-dom'
import { Zoom } from "react-reveal"

function Services (props, imgUrl){
    return(
        <Cards imgUrl = {props.service.imgUrl}>
            <div className='card'>
                <div className='caption_container'>
                </div>
                <div className = 'card_text'>
                    <div className='caption'>
                        {props.service.caption}
                        <NavLink to={props.service.readMore}><button>Read More</button></NavLink>
                    </div>
                    
                </div>
                
            </div>
        </Cards>  
    )
}


export default Services