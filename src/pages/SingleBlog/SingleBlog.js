import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class SingleBlog extends React.Component {

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
            <div>
                <button>Close</button>
            </div>
            </NavLink>
            {post.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(post => (
                <Table.Row key={post.id}>
                  <Table.Cell>
                    <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                  </Table.Cell>
                  <Table.Cell>{post.body}</Table.Cell>
                </Table.Row>
              ))}
            </div>  
        )
    }
}

export default SingleBlog