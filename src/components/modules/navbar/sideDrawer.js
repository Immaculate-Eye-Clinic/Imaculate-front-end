import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

class sideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                        <li>
                            <Link className="link" to="/profile">
                                Dashboard
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link className="link" to="/bookings">
                                Bookings
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link className="link" to="/events">
                                Events
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                </ul>
            </nav>
        );
    }
}

export default sideDrawer;
