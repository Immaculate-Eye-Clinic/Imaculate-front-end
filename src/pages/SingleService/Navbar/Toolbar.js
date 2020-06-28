import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div} from './styled'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


function Toolbar(props) {
    return(
        <Div>
            <ul className='dropdown'>
                <li><NavLink to='/services/urgent-eye-problems' activeClassName='link' exact><span></span>Urgent Eye Problem</NavLink></li>
                <li><NavLink to='/services/chalazion-removal' activeClassName='link'exact><span></span>Charazion Removal</NavLink></li>
                <li><NavLink to='/services/cataract-treatment' activeClassName='link'exact><span>Cataract</span> Treatment</NavLink></li>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <li><NavLink to='/services' activeClassName='link'exact><span>Glaucoma</span> Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact><span>Squint</span> Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact><span>Aqueous</span> Shunt Surgery</NavLink></li>
            </ul>
        </Div>
    )
}

export default Toolbar