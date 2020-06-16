import React from 'react'
import {Div } from './BlogNavStyle'
import {NavLink } from 'react-router-dom'

function BlogNav(){
    return(
        <Div>
            <nav>
                <ul>
                    <li><NavLink to='/idea' className='li'>Idea</NavLink></li>
                    <li><NavLink to='/clinic' className='li'>Clinic</NavLink></li>
                    <li><NavLink to='/mission' className='li'>Mission</NavLink></li>
                    <li><NavLink to='/corona' className='li'>Corona</NavLink></li>
                </ul>
            </nav>
        </Div>
    )
}

export default BlogNav