import styled from 'styled-components'

export const Container = styled.div `
    margin: auto;
    width: 90%;
    
    

    .aboutUs_container{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto;
        overflow: hidden;

        @media (min-width: 760px){
            width: 90%;
    }
    }
`