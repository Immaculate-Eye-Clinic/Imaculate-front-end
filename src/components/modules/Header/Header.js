import React from 'react'
import Hero from '../hero/Hero'
import Toolbar from '../navbar/navbar';
import SideDrawer from '../navbar/sideDrawer';
import Backdrop from '../navbar/backdrop';

class Header extends React.Component {
    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        const { children } = this.props;
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (
            <div>
                <Toolbar bgcolor={this.props.bgcolor} drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Hero 
                title={this.props.title}
                subText={this.props.subText}
                height={this.props.height}
                img={this.props.img}
                />
            </div>
        );
    }
}

export default Header;
