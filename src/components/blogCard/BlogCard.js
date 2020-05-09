import React from 'react'
import BlogList from './BlogList'
import BlogData from './BlogData'
import {Div} from './ComponentStyle'

function BlogCard(props){
    const BlogComponent = BlogData.map(blog => <BlogCard key={blog.id} blog={blog}/>)

    return(
        <div>
            <Div>{BlogComponent}</Div>
        </div>
    )
}

export default BlogCard