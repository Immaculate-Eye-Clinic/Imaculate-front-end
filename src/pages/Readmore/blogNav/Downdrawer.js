import React from 'react'
import {NavLink } from 'react-router-dom'
import {Nav } from './BlogNavStyle'

function Downdrawer(props){
    return(
        <Nav>
            <ul>
                <li><NavLink exact to='/values' className='li' activeClassName='active'>Immaculate Values</NavLink></li>
                <li><NavLink exact to='/choose' className='li' activeClassName='active'>Why Choose Immaculate?</NavLink></li>
                <li><NavLink exact to='/faq' className='li' activeClassName='active'>Frequently Asked Questions</NavLink></li>
                <li><NavLink exact to='/careers' className='li' activeClassName='active'>Careers</NavLink></li>
            </ul>
        </Nav>
    )
}

export default Downdrawer