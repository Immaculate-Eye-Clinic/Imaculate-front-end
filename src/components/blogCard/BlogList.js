import React from 'react'
import {Div} from './ComponentStyle'
import BlogData from './BlogData'
import BlogCard from './BlogCard'

function BlogList(props){
    return(
        <Div>
            {BlogData.map((blog, index) => (
                <BlogCard key={blog.id} imgUrl={blog.imgUrl} caption={blog.caption} />
            ))}
        </Div>
    )
}

export default BlogList