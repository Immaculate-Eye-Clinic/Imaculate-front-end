import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div} from './styled'


function Navs() {
    return(
        <Div>
            <ul className='dropdown'>
                <li><NavLink to='/services/:urgent-eye-problems' activeClassName='link' exact>Urgent Eye Problem</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Charazion Removal</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Cataract Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Glaucoma Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Squint Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Aqueous Shunt Surgery</NavLink></li>
            </ul>
        </Div>
    )
}

export default Navs