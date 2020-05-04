import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    text-align: left;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 40rem;
    max-width: 97%;
`;

class NoMatch extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div> 404 no page found</div>
            </HeaderWrapper>
        );
    }
}
export default NoMatch;
