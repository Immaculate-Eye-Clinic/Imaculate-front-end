import React, { Component } from 'react';
import Hero from '../components/modules/hero/Hero'

class NoMatch extends Component {
    render() {
        return (
            <Hero 
                title={"404"} 
                subText={"page not found"} 
                height={"100vh"}
                img={"asset/img/404.svg"}
            />
        );
    }
}
export default NoMatch;
