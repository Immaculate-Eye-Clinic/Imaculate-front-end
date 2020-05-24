import React from 'react'
import {NavLink} from 'react-router-dom'
import { Div } from './Styled'
import DrawerToggleButton from './drawerToggleButton';


class Navbar extends React.Component {
    render () {
        return (
            <Div bgcolor={this.props.bgcolor}>
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
                        <li height = "30px"><div className = 'container_sign_up'>
                                <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1589821953/pngfind.com-profile-icon-png-1102927_gaepvx.png"  alt = "user" height = "30px" width = "30px"/>
                                <div className = 'userStyle'>
                                    <div className = 'login'><NavLink to='/login'>Login</NavLink></div>
                                    <div className = 'sign-up'><NavLink to='/signup'>SignUp</NavLink></div>
                                </div>
                            </div>
                        </li>
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
