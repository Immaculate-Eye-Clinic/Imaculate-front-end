import React from 'react'
import {Div} from './IconStyle'

function HomeIcon(props){
    return(
        <Div>
           <div>
            <img src={props.imgUrl} alt = ""/>
            <p>{props.caption}</p>
           </div>
        </Div>
    )
}

export default HomeIcon