import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div, Div2, A, H1, Div1, P1,D} from './Styled'

class Navbar extends React.Component {
    render () {
        return (
            <Div>
                <Div1>
                    <div><H1>Immaculate</H1></div>
                    <D><P1>Eye Clinic</P1></D>
                </Div1>
                <Div2>
                    <NavLink to='/'  activeClassName='active' className='nav'><A>Home</A></NavLink><br />
                    <NavLink to='/common-eye-ailments'  activeClassName='active' className='nav'><A>Common Eye Ailments</A></NavLink>
                    <NavLink to='/our-services'  activeClassName='active' className='nav'><A>Our Services</A></NavLink>
                    <NavLink to='/visit-us' activeClassName='active' className='nav'><A>Visit Us</A></NavLink>
                </Div2>
            </Div>
        )
    }
}

export default Navbar