import React from 'react'
import {Div1} from './ComponentStyle'
import BlogData from './BlogData'
import BlogCard from './BlogCard'

function BlogList(props){
    const BlogComponent = BlogData.map(blog => <BlogCard key={blog.id} blog={blog}/>)
    return(
        <Div1>
            {BlogComponent}
        </Div1>
    )
}
{/*{BlogData.map((blog, index) => (<BlogCard key={blog.id} imgUrl={blog.imgUrl} caption={blog.caption} />
))}*/}
export default BlogList