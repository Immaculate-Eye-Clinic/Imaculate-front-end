import React from 'react'
import {Div} from './Style'

function BlogCard(props){
    return(
        <Div>
            <div><img src={props.blog.imgUrl} alt="blog"/></div>
            <div><p>{props.blog.caption}</p></div>
        </Div>
    )
}

export default BlogCard