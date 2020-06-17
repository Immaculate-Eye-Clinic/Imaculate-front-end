import React, { Component } from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class SingleBlog extends Component {

      constructor() {
        super();
        this.state = {
            post: [
              {title: "kjdkhlkjsdh"},
              {title: "kjdkhlkjsdh"},
              {title: "kjdkhlkjsdh"},
              {title: "kjdkhlkjsdh"}
            ],
        };
    }

    componentDidMount() {
      const { params } = this.props.match;
      axios.get(`https:/jsonplaceholder.typicode.com/posts/${params.postid}`).then(response => {
          this.setState({ post: response.data });
          console.log(response.data)
      });
  }

    // componentDidMount () {
    //     const { match: {params} } = this.props;

    //     axios.get(`https:/jsonplaceholder.typicode.com/posts/${params.postid}`)
    //     .then(response => {
    //       // console.log(response.data)
    //       this.setState({ post: response.data})
    //     })
        // .then(({ data: post }) => {
        // console.log('post', post);
      
        // this.setState({ post: post });
        //   });
    // }

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
              {/* <NavLink to='/blog'>
                  <button>Close</button>
              </NavLink>
              {this.state.post.map(blog =>{
                return (
                  <div key={blog.id}>
                    <h3>{blog.title}</h3>
                  </div>
                )
              })

              } */}
              {this.state.post.map(single => {
                    return (
                        <div key={single.id}>
                            <h1>{single.title}</h1>
                            <h3>
                                {single.body}
                                
                            </h3>
                        </div>
                        
                    );
                })}
                              {/* {console.log(this.state.post)} */}

            </div>  
        )
    }
}

export default SingleBlog