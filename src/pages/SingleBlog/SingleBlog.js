import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class SingleBlog extends React.Component {

    constructor() {
      super()
      this.state = {
        post: []
      }
    }

    componentDidMount () {
        const { match: {params} } = this.props;

        axios.get(`https:/jsonplaceholder.typicode.com/posts/${params.postid}`)
        .then(({ data: post }) => {
        console.log('post', post);
      
        this.setState({ post });
          });
    }

    handleDelete() {
        const { match: { params } } = this.props;
      
        axios.delete(`https:/jsonplaceholder.typicode.com/posts/${params.postid}`)
          .then(() => {
            console.log('post deleted');
          });
        }

    render() {
        return (
            <div>
              <NavLink to='/blog'>
                  <button>Close</button>
              </NavLink>
              {this.state.post.map(blog =>{
                return (
                  <div key={blog.id}>
                    <h3>{blog.title.rendered}</h3>
                  </div>
                )
              })

              }
            </div>  
        )
    }
}

export default SingleBlog