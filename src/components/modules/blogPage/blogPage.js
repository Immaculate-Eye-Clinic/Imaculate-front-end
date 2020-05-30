import React from 'react'
import {Div} from './Styled'

import BlogList from './blogList'
import BlogData from './blogData'
import Category from './Category'

function BlogPage() {
        const Blog = BlogList.map((data) => <BlogData key={data.id} data={data} />)
    return (
        <Div>
            <div>
            <p>home > blog</p>
            <h1>Blog</h1>
            {Blog}
            </div>
            <div>
            <Category />
            </div>
        </Div>
    )
}

export default BlogPage