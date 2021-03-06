import styled from 'styled-components'

export const Div = styled.div `
    .div{
        position: fixed;
        background-color: white;
        width: 300px;
        border: 1px solid #ccc;
        box-shadow: 3px 3px 3px black;
        padding: 40px;
        left: 40%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
        border-radius: 10px;
        @media (max-width: 995px){
            left: 35%
        }
        @media (max-width: 735px){
            left: 30%
        }
        @media (max-width: 650px){
            left: 25%
        }
        @media (max-width: 520px){
            left: 20%
        }
        @media (max-width: 460px){
            left: 15%
        }
        @media (max-width: 375px){
            left: 10%
        }
        .x{
            position: absolute;
            bottom: 93%;
            left: 92%;
            border: none;
            outline: none;
            font-size: 16px;
            background: transparent;
            cursor: pointer;
        }
        .form{
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            background: white;
            input{
                padding: 5px 40px;
                border: 0.5px solid black;
                border-radius: 10px;
            }
            .id{
                display: none;
            }
            button{
                background: #252079;
                color: white;
                border: none;
                padding: 10px 30px;
                border-radius: 10px;
                cursor: pointer;
            }
            h3{
                text-align: center;
                color: #252079;
                padding: 0;
            }
        }
    }

`

export const Divs = styled.div `
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
`