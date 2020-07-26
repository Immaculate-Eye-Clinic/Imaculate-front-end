import styled from 'styled-components'

export const Div = styled.div `
position: relative;
    .dash {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background: whitesmoke;
        height: 100vh;
        @media (max-width: 1000px) {
           flex-direction: column;
           align-items: center;
           height: auto;
           position: relative;
           margin-top: 5em;
        }
        .profile {
            width: 30%;
            position: relative;
            top: 22.7%;
            @media (max-width: 1000px) {
                width: 80%;
                margin-top: 50px;
        }
        }
        .tab {
            width: 60%;
            position: relative;
            top: 21%;
            @media (max-width: 1000px) {
                width: 80%;
                margin-top: 50px;
        }
        }
    }
`