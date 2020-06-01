import styled from 'styled-components'

export const Container = styled.div `
    

    .aboutUs_container{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 1em;
        width: 90%;

        @media (min-width: 760px){
            width: 100%;
    }
`