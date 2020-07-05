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
                                <div><NavLink exact to='/about/values' className='item'>Immaculate Values</NavLink></div>
                                <div><NavLink exact to='/about/choose' className='item'>Why Choose Us</NavLink></div>
                                <div><NavLink exact to='/about/faq' className='item'>FAQ</NavLink></div>
                                <div><NavLink exact to='/about/careers' className='item item_last'>Careers</NavLink></div>                                
                            </div>
                        </li>
                        
                        
                        <li>
                            <NavLink exact to='/services'  activeClassName='active'>Services</NavLink><span></span>
                            <div className = 'userStyle userStyle_services'>
                                <div><NavLink to='/services/chalazion-removal' className='item' activeClassName='link'exact>Charazion Removal</NavLink></div>
                                <div><NavLink to='/services/urgent-eye-problems' className='item' activeClassName='link' exact>Urgent Eye Problem</NavLink></div>
                                <div><NavLink to='/services/cataract-treatment' className='item' activeClassName='link'exact>Cataract Treatment</NavLink></div>
                                <div><NavLink to='/services' className='item' activeClassName='link'exact>Glaucoma Treatment</NavLink></div>
                                <div><NavLink to='/services' className='item' activeClassName='link'exact>Squint Treatment</NavLink></div>
                                <div><NavLink to='/services' className='item item_last' activeClassName='link'exact>Aqueous Shunt Surgery</NavLink></div>
                            </div>
                        </li>
                        
                        
                        <li><NavLink exact to='/blog'  activeClassName='active'>Blog</NavLink><span></span></li>
                        
                        
                        <li><NavLink exact to='/visit'  activeClassName='active'>Visit Us</NavLink><span></span></li>
                        
                        
                        <li>
                            <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1589821953/pngfind.com-profile-icon-png-1102927_gaepvx.png"  alt = "user" height = "30px" width = "30px"/>
                            <div className = 'userStyle userStyle_user'>
                                <div><NavLink to='/login' className='item'>Login</NavLink></div>
                                <div><NavLink to='/signup' className='item item_last'>SignUp</NavLink></div>
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
