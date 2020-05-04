import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div, Div2, Div1} from './Styled'

class Navbar extends React.Component {
    render () {
        return (
            <Div>
                <Div1>
                    <div><h1>Immaculate</h1></div>
                    <span>Eye Clinic</span>
                </Div1>
                <Div2>
                    <ul class="menu">
                        <li><NavLink to='/'  activeClassName='active'>Home</NavLink><span></span></li>
                        <li><NavLink to='/about'  activeClassName='active'>About</NavLink><span></span></li>
                        <li><NavLink to='/services'  activeClassName='active'>Services</NavLink><span></span></li>
                        <li><NavLink to='/Test'  activeClassName='active'>Eye Test</NavLink><span></span></li>
                        <li><NavLink to='/visitUs'  activeClassName='active'>Visit Us</NavLink><span></span></li>               
                    </ul>
                </Div2>
            </Div>
        )
    }
}

export default Navbar