import React from 'react'
import {Div} from './IconListStyle'

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