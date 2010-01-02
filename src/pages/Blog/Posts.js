import React from 'react'
import {Div} from './styled'
import {NavLink} from 'react-router-dom'

import BlogData from '../../components/modules/blogPage/blogData'
import Skeleton from '../../components/modules/blogPage/Skeleto'
import Spinner from '../../components/modules/Spinner/Spinner'


const Posts = ({ posts, loading, title }) => {
    if(loading) {
        return <Spinner />
    }
    return(
      <Div>
        
          <ul>
            {posts.map(post => (
              <NavLink to={`/blog/${post.id}`}>
              <BlogData key={post.id} title={post.title}/>
              </NavLink>
            ))}
          </ul>
     </Div>
    )
}

export default Posts