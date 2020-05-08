import React from 'react'
import {Div} from './BloglistStyle'

function BlogList(props){
    return(
        <Div>
            <div><img src={props.imgUrl}/></div>
            <div><p>{props.caption}</p></div>
        </Div>
    )
}

export default BlogList