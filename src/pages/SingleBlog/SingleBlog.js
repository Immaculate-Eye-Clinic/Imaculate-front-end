import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

class SingleBlog extends React.Component {
    state = {
        data: null
    }

    componentDidMount () {
        const { param } = this.props.match.params
        fetch(`https:/jsonplaceholder.typicode.com/posts/${param}`)
        .then((data) => {
            this.setState(() => ({data}))
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default SingleBlog