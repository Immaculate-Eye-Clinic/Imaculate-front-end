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


                        <li>
                            
                        <div className = 'container-sign-up'>
                                <img src = "https://res.cloudinary.com/hisroyalwonginess/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1589490335/65U_hqdqju.svg"  alt = "Login" height = "30px" width = "30px"/>
                                <div className = 'userStyle'>
                                    <div className = 'login'>Login</div>
                                    <div className = 'sign-up'>Sign Up</div>
                                </div>
                            </div>
                            
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                </ul>
            </nav>
            </Drawer>
        );
    }
}

export default sideDrawer;
