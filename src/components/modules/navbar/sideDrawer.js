import React, { Component } from 'react';
// import './menu.css';
import { Link } from 'react-router-dom';
import { Drawer } from './Styled'

class sideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <Drawer>
            <nav className={drawerClasses}>

            <div className = 'container-sign-up'>
                <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/v1589821953/pngfind.com-profile-icon-png-1102927_gaepvx.png"  alt = "user" height = "30px" width = "30px"/>
                <div className = 'userStyle'>
                <div className = 'login'>Login</div>
                <div className = 'sign-up'>Sign Up</div>
                </div>
            </div>


                <ul>
                        <li>
                            <Link className="link" to="/">
                                Home
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link className="link" to="/about">
                                About
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link className="link" to="/service">
                                Service
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link className="link" to="/blog">
                                Blog
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link className="link" to="/visit">
                                Visit Us
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                </ul>
            </nav>
            </Drawer>
        );
    }
}

export default sideDrawer;
