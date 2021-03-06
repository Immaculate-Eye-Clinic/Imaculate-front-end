import React, { Component } from 'react';
import Toolbar from './modules/navbar/navbar';

import SideDrawer from './modules/navbar/sideDrawer';
import Backdrop from './modules/navbar/backdrop';
import ScrollApp from '../components/floatToTop/ScrollApp'

class App extends Component {
    // state = {
    //     sideDrawerOpen: false,
    // };

    // drawerToggleClickHandler = () => {
    //     this.setState(prevState => {
    //         return { sideDrawerOpen: !prevState.sideDrawerOpen };
    //     });
    // };

    // backdropClickHandler = () => {
    //     this.setState({ sideDrawerOpen: false });
    // };

    render() {
        const { children } = this.props;
        let backdrop;

        // if (this.state.sideDrawerOpen) {
        //     backdrop = <Backdrop click={this.backdropClickHandler} />;
        // }
        return (
            <div>
                {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop} */}
                <main>
                    {children}
                </main>
                <ScrollApp />
            </div>
        );
    }
}

export default App;
