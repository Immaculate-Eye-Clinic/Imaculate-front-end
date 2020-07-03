import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div} from './styled'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


function Toolbar(props) {
    return(
        <Div>
            <ul className='dropdown'>
                <li><NavLink to='/services/urgent-eye-problems' activeClassName='link' exact><span>Urgent Eye</span> <span>Problem</span></NavLink></li>
                <li><NavLink to='/services/chalazion-removal' activeClassName='link'exact><span>Charazion</span> <span>Removal</span></NavLink></li>
                <li><NavLink to='/services/cataract-treatment' activeClassName='link'exact><span>Cataract</span> <span>Treatment</span></NavLink></li>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <li><NavLink to='/services' activeClassName='link'exact><span>Glaucoma</span> <span>Treatment</span></NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact><span>Squint</span> <span>Treatment</span></NavLink></li>
                <li><NavLink to='/services' activeClassName='link'exact><span>Aqueous Shunt</span> <span>Surgery</span></NavLink></li>
            </ul>
        </Div>
    )
}

export default Toolbar