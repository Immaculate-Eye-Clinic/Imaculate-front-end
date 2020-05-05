import React from 'react'
import {NavLink} from 'react-router-dom'
import { Div } from './Styled'
import DrawerToggleButton from './drawerToggleButton';

class Navbar extends React.Component {
    render () {
        return (
            <Div>
                <div className="logo">
                    <div><h1>Immaculate</h1></div>
                    <span>Eye Clinic</span>
                </div>
                <DrawerToggleButton className="toggleButton" click={this.props.drawerClickHandler} />            
                <div className="navs">
                    <ul class="menu">
                        <li><NavLink to='/'  activeClassName='active'>Home</NavLink><span></span></li>
                        <li><NavLink to='/about'  activeClassName='active'>About</NavLink><span></span></li>
                        <li><NavLink to='/services'  activeClassName='active'>Services</NavLink><span></span></li>
                        <li><NavLink to='/Test'  activeClassName='active'>Eye Test</NavLink><span></span></li>
                        <li><NavLink to='/visitUs'  activeClassName='active'>Visit Us</NavLink><span></span></li>
                    </ul>
                </div>
            </Div>
        )
    }
}

export default Navbar
