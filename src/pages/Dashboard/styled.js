import styled from 'styled-components'

export const Div = styled.div `
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
            .button-div{
                display: flex;
                justify-content: center;
                .button{
                    background: #252079;
                    color: white;
                    border: none;
                    outline: none;
                    padding: 10px 30px;
                    border-radius: 10px;
                    cursor: pointer;
                }
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