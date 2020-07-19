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
                        
                        
                        <li>
                            <NavLink exact to='/about'  activeClassName='active'>About</NavLink><span></span>
                            <div className = 'userStyle userStyle_about'>
                                <div className = 'box'>
                                    <div className='item'><NavLink exact to='/about/faq' className='item_content'>FAQ</NavLink></div>
                                    <div className='item'><NavLink exact to='/about/careers' className='item_content'>Careers</NavLink></div> 
                                    <div className='item'><NavLink exact to='/about/choose' className='item_content'>Why Choose Us</NavLink></div>
                                    <div className='item'><NavLink exact to='/about/values' className='item_content'>Immaculate Values</NavLink></div>                                     
                                </div>                              
                            </div>
                        </li>
                        
                        
                        <li>
                            <NavLink exact to='/services'  activeClassName='active'>Services</NavLink><span></span>
                            <div className = 'userStyle userStyle_services'>
                                <div className = 'box'>
                                    <div className='item'><NavLink to='/services/chalazion-removal' className='item_content' activeClassName='link'exact>Charazion Removal</NavLink></div>
                                    <div className='item'><NavLink to='/services/urgent-eye-problems' className='item_content' activeClassName='link' exact>Urgent Eye Problem</NavLink></div>
                                    <div className='item'><NavLink to='/services/cataract-treatment' className='item_content' activeClassName='link'exact>Cataract Treatment</NavLink></div>
                                    <div className='item'><NavLink to='/services' className='item_content' activeClassName='link'exact>Glaucoma Treatment</NavLink></div>
                                    <div className='item'><NavLink to='/services' className='item_content' activeClassName='link'exact>Squint Treatment</NavLink></div>
                                    <div className='item'><NavLink to='/services' className='item_content' activeClassName='link'exact>Aqueous Shunt Surgery</NavLink></div>
                                </div>
                            </div>
                        </li>
                        
                        
                        <li><NavLink exact to='/blog'  activeClassName='active'>Blog</NavLink><span></span></li>
                        
                        
                        <li><NavLink exact to='/visit'  activeClassName='active'>Visit Us</NavLink><span></span></li>

                        <li><NavLink exact to='/dashboard'  activeClassName='active'>Dashboard</NavLink><span></span></li>
                        
                        
                        <li>
                            <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1589821953/pngfind.com-profile-icon-png-1102927_gaepvx.png"  alt = "user" height = "30px" width = "30px"/>
                            <div className = 'userStyle userStyle_user'>
                                <div className = 'box'>
                                    <div className='item'><NavLink to='/login' className='item_content'>Login</NavLink></div>
                                    <div className='item'><NavLink to='/signup' className='item_content'>SignUp</NavLink></div>
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
