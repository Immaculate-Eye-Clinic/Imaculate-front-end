import React from 'react'
import {Div} from './IconStyle'
import IconData from './IconData'

function IconList(props){
    return(
        <Div>
           <div>
                <img src={props.icon.imgUrl}/>
                <p>{props.icon.caption}</p>
           </div>
        </Div>
    )
}

export default IconList