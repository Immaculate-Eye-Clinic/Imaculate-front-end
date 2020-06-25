import React from 'react'
import BlogNav from './BlogNav'
import Downdrawer from './Downdrawer'

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
        }
        this.drawerclickhandler = this.drawerclickhandler.bind(this)
    }

    drawerclickhandler(){
        this.setState((prevState) => {
            return{open: !prevState.open}
        })
    }
    render(){
        let downdrawer
        if (this.state.open){
            downdrawer = <Downdrawer />
        }
        return(
            <div>
                <BlogNav drawerhandler={this.drawerclickhandler} />
                {downdrawer}
            </div>
        )
    }
} 

export default Nav