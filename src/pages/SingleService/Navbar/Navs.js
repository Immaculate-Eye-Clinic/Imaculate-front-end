import React from 'react'
import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'


class Navs extends React.Component {
    state = {
        sideDrawerOpen: false,
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            }
        })
    }

    render() {
        let sideDrawer;
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />
        }
        return(
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {SideDrawer}
            </div>
        )
    }
}

export default Navs