import React, { Component } from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class SingleBlog extends Component {

      constructor() {
        super();
        this.state = {
            blog: [],
        };
    }

    componentDidMount () {
        const { match: {params} } = this.props;

        axios.get(`https:/jsonplaceholder.typicode.com/posts/${params.blogid}`)
        .then(response => {
          this.setState({ blog: response.data})
        })
    
    }

    render() {
        return (
            <div>
              <NavLink to='/blog'>
                  <button>Close</button>
              </NavLink>
              <div key={this.state.blog.id}>
                <h3>{this.state.blog.title}</h3>
              </div>

            </div>  
        )
    }
}

export default SingleBlog