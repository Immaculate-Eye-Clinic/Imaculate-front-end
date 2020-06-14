import React from 'react'

const Posts = ({ posts, loading, title }) => {
    if(loading) {
        return <h1>Loading</h1>
    }
    return(
      <Div>
          <ul>
            {posts.map(post => (
              <BlogData key={post.id} title={post.title} body={post.body}/>
            ))}
          </ul>
     </Div>
    )
}

export default Posts