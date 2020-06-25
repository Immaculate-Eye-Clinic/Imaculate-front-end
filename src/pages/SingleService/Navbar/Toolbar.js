import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div} from './styled'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


function Toolbar(props) {
    return(
        <Div>
            <ul className='dropdown'>
                <li><NavLink to='/services/urgent-eye-problems' activeClassName='link' exact>Urgent Eye Problem</NavLink></li>
                <li><NavLink to='/services/chalazion-removal' activeClassName='link'exact>Charazion Removal</NavLink></li>
                <li><NavLink to='/services/cataract-treatment' activeClassName='link'exact>Cataract Treatment</NavLink></li>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <li><NavLink to='/services' activeClassName='link'exact>Glaucoma Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Squint Treatment</NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact>Aqueous Shunt Surgery</NavLink></li>
            </ul>
        </Div>
    )
}

export default Toolbar