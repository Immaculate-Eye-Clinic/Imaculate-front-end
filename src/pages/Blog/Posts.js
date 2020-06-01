import React from 'react'

import BlogList from '../../components/modules/blogPage/blogList'
import BlogData from '../../components/modules/blogPage/blogData'

function Posts({posts, loading}) {
    if (loading) {
        return <h2>loading.....</h2>
    }

    return <ul>
        {BlogList.map(data => (
            <li></li>
        ))}
    </ul>
}

export default Posts