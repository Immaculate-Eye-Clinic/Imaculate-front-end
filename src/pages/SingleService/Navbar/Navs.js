import React from 'react'
import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'


class Navs extends React.Component {
    state = {
        open: false,
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{open: !prevState.open}
        })
    }

    render() {
        let drawer

        if (this.state.open) {
            drawer = <SideDrawer />
        }
        return(
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {drawer}
            </div>
        )
    }
}

export default Navs