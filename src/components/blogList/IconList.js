import React from 'react'
import {Div} from './IconListStyle'

function IconList(props){
    return(
        <Div>
           <div>
                <img src={props.imgUrl}/>
                <p>{props.caption}</p>
           </div>
        </Div>
    )
}

export default IconList