import styled from 'styled-components'


export const UserStyle = styled.div `
    color: white;
    margin: 2em;
    font-size: 1.2em;

    .container .hidden{
        display: none;
    }

    .container:hover .hidden {
        display: block;
    }
`