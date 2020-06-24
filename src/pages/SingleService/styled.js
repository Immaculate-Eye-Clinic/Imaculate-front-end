import styled from 'styled-components'

export const Div = styled.header `
background: #252079;
top: 0;
padding: 10px;
flex-wrap: wrap;
.dropdown {
    display: flex;
    list-style: none;
    .link {
        border-bottom: 2px white solid;
    }
    a {
        text-decoration: none;
        color: white;
        margin: 8px;
        margin-left: 30px;
        padding-bottom: 20px;
        font-size: 15px;
    }
}
`