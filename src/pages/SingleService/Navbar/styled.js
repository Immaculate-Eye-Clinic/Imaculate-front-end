import styled from 'styled-components'

export const Div = styled.header `
background: #252079;
top: 0;
padding: 10px;
flex-wrap: wrap;
.dropdown {
    display: flex;
    justify-content: center;
    list-style: none;
    text-align: center;
    div {
        display: none;
        @media (max-width: 1000px) {
            display: block;
        }
        @media (max-width: 500px) {
            margin-right: 10%;
        }
    }
    .link {
        border-bottom: 2px white solid;
    }
    a {
        text-decoration: none;
        color: white;
        margin: 8px;
        margin-left: 35px;
        padding-bottom: 20px;
        font-size: 15px;
        @media (max-width: 1000px) {
            display: none;
        }
    }
}
`