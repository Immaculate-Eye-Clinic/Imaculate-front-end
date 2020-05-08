import React from 'react'
import {Div, Div1, Div2} from './BloglistStyle'

function BlogList(props){
    return(
        <Div>
           <Div1>
            <img src={props.imgUrl}/>
            <p>{props.caption} </p>

            <img src={props.imgUrl}/>
            <p>{props.caption} </p>
            </Div1><br/>
            <Div2>
            <img src={props.imgUrl}/>
            <p>{props.caption} </p>

            <img src={props.imgUrl}/>
            <p>{props.caption} </p>
           </Div2>
        </Div>
    )
}

export default BlogList