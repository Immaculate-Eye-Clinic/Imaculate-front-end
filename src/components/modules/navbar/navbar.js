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
                        <li><NavLink exact to='/'  activeClassName='active'>Home</NavLink><span></span></li>
                        <li className='about'><NavLink exact to='/about'  activeClassName='active'>About</NavLink><span></span>
                            <div className='dropdown'>
                                <ul>
                                    <li><NavLink exact to='/idea' className='links'>Immaculate Values</NavLink></li>
                                    <li><NavLink exact to='/clinic' className='links'>Why Choose Immaculate?</NavLink></li>
                                    <li><NavLink exact to='/mission' className='links'>Frequently Asked Questions</NavLink></li>
                                    <li><NavLink exact to='/corona' className='links'>Careers</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li><NavLink exact to='/services'  activeClassName='active'>Services</NavLink><span></span></li>
                        <li><NavLink exact to='/blog'  activeClassName='active'>Blog</NavLink><span></span></li>
                        <li><NavLink exact to='/visit'  activeClassName='active'>Visit Us</NavLink><span></span></li>
                        <li height = "30px"><div className = 'container_sign_up'>
                                <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1589821953/pngfind.com-profile-icon-png-1102927_gaepvx.png"  alt = "user" height = "30px" width = "30px"/>
                                <div className = 'userStyle'>
                                    <div className = 'login'><NavLink to='/login'>Login</NavLink></div>
                                    <div className = 'sign_up'><NavLink to='/signup'>SignUp</NavLink></div>
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
