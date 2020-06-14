import React from 'react'
import {Div} from './styled'
import {NavLink} from 'react-router-dom'

import BlogData from '../../components/modules/blogPage/blogData'
import Skeleton from '../../components/modules/blogPage/Skeleton'


const Posts = ({ posts, loading, title }) => {
    if(loading) {
        return <Skeleton />
    }
    return(
      <Div>
        <NavLink to='/blog/{`${post.id}`}'>
          <ul>
            {posts.map(post => (
              <BlogData key={post.id} title={post.title}/>
            ))}
          </ul>
        </NavLink>
     </Div>
    )
}

export default Posts