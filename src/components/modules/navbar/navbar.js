import React from 'react'
import {NavLink} from 'react-router-dom'
import { Div } from './Styled'
import DrawerToggleButton from './drawerToggleButton';


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
                        <li height = "30px"><div className = 'container-sign-up'>
                                <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589490335/65U_hqdqju.svg"  alt = "Login" height = "30px" width = "30px"/>
                                <div className = 'userStyle'>
                                    <div className = 'login'>Login</div>
                                    <div className = 'sign-up'>Sign Up</div>
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
