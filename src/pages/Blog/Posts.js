import React from 'react'
import {Ul} from './styled'

import BlogData from '../../components/modules/blogPage/blogData'
import BlogPage from '../../components/modules/blogPage/blogPage'


const Posts = ({ posts, loading, title }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return(
     <Ul>
      {posts.map(post => (
        <BlogData key={post.id} title={title}/>
      ))}
      
     </Ul>
    )
}

export default Posts