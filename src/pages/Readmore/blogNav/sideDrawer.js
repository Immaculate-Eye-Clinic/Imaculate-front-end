import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from './BlogNavStyle'


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
                        <Link className="link" to="/values">
                            Immaculate Values
                        </Link>
                        <hr style={{ marginRight: '40px' }} />
                    </li>
                    <li>
                        <Link className="link" to="/choose">
                            Why Choose Immaculate
                        </Link>
                        <hr style={{ marginRight: '40px' }} />
                    </li>
                    <li>
                        <Link className="link" to="/faq">
                            Frequently Asked Questions
                        </Link>
                        <hr style={{ marginRight: '40px' }} />
                    </li>
                    <li>
                        <Link className="link" to="/careers">
                            Careers
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
