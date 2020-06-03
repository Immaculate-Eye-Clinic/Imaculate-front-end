import React from 'react'
import {Div} from './styled'

import BlogData from '../../components/modules/blogPage/blogData'


const Posts = ({ posts, loading, title }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return(
      <Div>
     <ul>
      {posts.map(post => (
        <BlogData key={post.id} title={post.title}/>
      ))}
      
     </ul>
     </Div>
    )
}

export default Posts