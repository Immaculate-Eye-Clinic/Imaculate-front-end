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
                </ul>
            </nav>
            </Drawer>
        );
    }
}

export default sideDrawer;
