import React from 'react'
import {Div} from './IconStyle'

function IconList(props){
    return(
        <Div>
           <div>
                <img src={props.icon.imgUrl} alt="icon"/>
                <p>{props.icon.caption}</p>
           </div>
        </Div>
    )
}

export default IconList