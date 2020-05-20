import React from 'react'
import { Div1, Mobile_Div } from './ComponentStyle'
import BlogData from './BlogData'
import BlogCard from './BlogCard'

function BlogList(props){
    return(
        <React.Fragment>
            <Div1>
                <div className="title">Blog</div>
                <div className="scrolling_wrapper">
                    <div className="container">
                        {BlogData.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog}/>))}
                    </div>
                </div>
                <div className="butContianer">
                        <button className="but">View All</button>
                </div>
            </Div1>
            <Mobile_Div>
                <div className="title">Blog</div>
                <div className="scrolling_wrapper">
                    <div className="container">
                        {BlogData.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog}/>))}
                    </div>
                </div>
                <div className="butContianer">
                        <button className="but">View All</button>
                </div>
            </Mobile_Div>

        </React.Fragment>
    )
}
export default BlogList