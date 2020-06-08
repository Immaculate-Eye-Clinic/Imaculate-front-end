import React from 'react'
import {Div} from './styled'

import BlogData from '../../components/modules/blogPage/blogData'
import Skeleton from '../../components/modules/blogPage/Skeleton'


const Posts = ({ posts, loading, title }) => {
    if(loading) {
        return <Skeleton />
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