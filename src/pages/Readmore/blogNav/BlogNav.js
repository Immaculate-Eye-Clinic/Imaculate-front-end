import React from 'react'
import {Div } from './BlogNavStyle'
import {NavLink } from 'react-router-dom'
import DrawerToggleButton from './drawerToggleButton'

function BlogNav(){
    return(
        <Div>
            <nav>
                <ul>
                    <li><NavLink exact to='/values' className='li' activeClassName='active'>Immaculate Values</NavLink></li>
                    <li><NavLink exact to='/choose' className='li' activeClassName='active'>Why Choose Immaculate?</NavLink></li>
                    <li><NavLink exact to='/faq' className='li' activeClassName='active'>Frequently Asked Questions</NavLink></li>
                    <li><NavLink exact to='/careers' className='li' activeClassName='active'>Careers</NavLink></li>
                </ul>
                 
            </nav>
        </Div>
    )
}

export default BlogNav