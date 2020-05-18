import React from 'react'
import {Div1} from './ComponentStyle'
import BlogData from './BlogData'
import BlogCard from './BlogCard'

function BlogList(props){
    return(
        <Div1>
            <div className="title">Blog</div>
            <div className="container">
            {BlogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog}/>))}
            </div>
            <div className="butContianer">
            <button className="but">View All</button>
            </div>
        </Div1>
    )
}
export default BlogList