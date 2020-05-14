import React from 'react'
import {NavLink} from 'react-router-dom'
import { Div } from './Styled'
import DrawerToggleButton from './drawerToggleButton';
import Users from './Users'

class Navbar extends React.Component {
    render () {
        return (
            <Div>
                <div className="logo">
                    <img src="asset/img/logo1.png" alt="logo" />
                </div>          
                <div className="navs">
                    <ul class="menu">
                        <li><NavLink to='/'  activeClassName='active'>Home</NavLink><span></span></li>
                        <li><NavLink to='/about'  activeClassName='active'>About</NavLink><span></span></li>
                        <li><NavLink to='/services'  activeClassName='active'>Services</NavLink><span></span></li>
                        <li><NavLink to='/blog'  activeClassName='active'>Blog</NavLink><span></span></li>
                        <li><NavLink to='/visit'  activeClassName='active'>Visit Us</NavLink><span></span></li>
                        <li> <Users /> <span></span></li>
                    </ul>
                </div>
                <div className="toggle">
                    <DrawerToggleButton click={this.props.drawerClickHandler} /> 
                </div> 
            </Div>
        )
    }
}

export default Navbar
