import styled from 'styled-components'

export const Div = styled.div `
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 300px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 40px;
    left: 40%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    .form{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        input{
            padding: 5px;
        }
        button{
            background: #252079;
            color: white;
            border: none;
            padding: 10px 30px;
            cursor: pointer;
        }
        h3{
            text-align: center;
            color: #252079;
            padding: 0;
        }
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