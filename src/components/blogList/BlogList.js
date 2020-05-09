import React from 'react'
import {Div} from './BloglistStyle'

function BlogList(props){
    return(
        <Div>
            <div><img src={props.blog.imgUrl}/></div>
            <div><p>{props.blog.caption}</p></div>
        </Div>
    )
}

export default BlogList