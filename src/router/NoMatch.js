import React, { Component } from 'react';
import Header from '../components/modules/Header/Header'

class NoMatch extends Component {
    render() {
        return (
            <Header 
                bgcolor={'transparent'}
                title={'404'}
                subText={'Sub text goes herPage not found'}
                height={'100vh'}
                mobileHeight={'100vh'}
                img={'asset/img/404.svg'}
            />
        );
    }
}
export default NoMatch;
