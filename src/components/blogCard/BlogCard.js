import React from 'react'
import BlogList from './BlogList'
import BlogData from './BlogData'
import {Div} from './Style'

function BlogCard(props){
    // const BlogComponent = BlogData.map(blog => <BlogCard key={blog.id} blog={blog}/>)

    return(
        <Div>
            <div><img src={props.blog.imgUrl}/></div>
            <div><p>{props.blog.caption}</p></div>
        </Div>
    )
}

export default BlogCard