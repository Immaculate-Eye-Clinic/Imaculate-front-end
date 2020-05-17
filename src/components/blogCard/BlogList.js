import React from 'react'
import {Div1} from './ComponentStyle'
import BlogData from './BlogData'
import BlogCard from './BlogCard'

function BlogList(props){
    return(
        <Div1>
            <div className="title">Blog</div>
            {BlogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog}/>))}
        </Div1>
    )
}
export default BlogList