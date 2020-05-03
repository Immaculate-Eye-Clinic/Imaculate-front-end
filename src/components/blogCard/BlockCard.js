import React from 'react'
import {Div, Img, P} from './Style'

function BlockCard(props){
    return(
        <Div>
            <Img src={props.imgUrl}/>
            <P>{props.caption} </P>
        </Div>
    )
}

export default BlockCard