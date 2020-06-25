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
    div {
        display: none;
        @media (max-width: 1000px) {
            display: block;
        }
    }
    .link {
        border-bottom: 2px white solid;
    }
    a {
        text-decoration: none;
        text-align: center;
        width: 20px;
        color: white;
        margin: 8px;
        margin-left: 35px;
        padding-bottom: 20px;
        font-size: 15px;
        border: 2px solid black;
        @media (max-width: 1000px) {
            display: none;
        }
    }
}
`