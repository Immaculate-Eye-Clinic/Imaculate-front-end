import React from 'react'
import {Div } from './BlogNavStyle'
import {NavLink } from 'react-router-dom'
import Drawerbutton from './Drawerbutton'

function BlogNav(props){
    return(
        <Div>
            <nav>
                <ul>
                    <li><NavLink exact to='/about/values' className='li' activeClassName='active'>Immaculate Values</NavLink></li>
                    <li><NavLink exact to='/about/choose' className='li' activeClassName='active'>Why Choose Immaculate?</NavLink></li>
                    <div className='button'>
                        <Drawerbutton click={props.drawerhandler} />
                    </div>
                    <li><NavLink exact to='/about/faq' className='li' activeClassName='active'>Frequently Asked Questions</NavLink></li>
                    <li><NavLink exact to='/about/careers' className='li' activeClassName='active'>Careers</NavLink></li>
                </ul>
            </nav>
        </Div>
    )
}

export default BlogNav