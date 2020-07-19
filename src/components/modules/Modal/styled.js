import styled from 'styled-components'

export const Div = styled.div `
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 500px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    .form{
        display: flex;
        button{
            color: green;
        }
    }

@media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
}
`

export const Divs = styled.div `
    width: 500px;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
`