import React, { Component } from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class SingleBlog extends Component {

      constructor() {
        super();
        this.state = {
            post: [],
        };
    }

    componentDidMount () {
        const { match: {params} } = this.props;

        axios.get(`https:/jsonplaceholder.typicode.com/posts/${params.postid}`)
        .then(response => {
          this.setState({ post: response.data})
        })

    }

    render() {
        return (
            <div>
              <NavLink to='/blog'>
                  <button>Close</button>
              </NavLink>
              <div key={this.state.post.id}>
                    <h3>{this.state.post.title}</h3>
                  </div>

            </div>  
        )
    }
}

export default SingleBlog