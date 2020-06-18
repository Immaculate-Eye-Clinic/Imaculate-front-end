import React from 'react'
import {Div } from './BlogNavStyle'
import {NavLink } from 'react-router-dom'

function BlogNav(){
    return(
        <Div>
            <nav>
                <ul>
                    <li><NavLink exact to='/idea' className='li' activeClassName='active'>Immaculate Values</NavLink></li>
                    <li><NavLink exact to='/clinic' className='li' activeClassName='active'>Why Choose Immaculate?</NavLink></li>
                    <li><NavLink exact to='/mission' className='li' activeClassName='active'>Frequently Asked Questions</NavLink></li>
                    <li><NavLink exact to='/corona' className='li' activeClassName='active'>Careers</NavLink></li>
                </ul>
            </nav>
        </Div>
    )
}

export default BlogNav