import React from 'react'
import {NavLink } from 'react-router-dom'
import {Nav } from './BlogNavStyle'

function Downdrawer(props){
    return(
        <Nav>
            <ul>
                <li><NavLink exact to='/about/values' className='li' activeClassName='active'>Immaculate Values</NavLink></li>
                <li><NavLink exact to='/about/choose' className='li' activeClassName='active'>Why Choose Immaculate?</NavLink></li>
                <li><NavLink exact to='/about/faq' className='li' activeClassName='active'>Frequently Asked Questions</NavLink></li>
                <li><NavLink exact to='/about/careers' className='li' activeClassName='active'>Careers</NavLink></li>
            </ul>
        </Nav>
    )
}

export default Downdrawer