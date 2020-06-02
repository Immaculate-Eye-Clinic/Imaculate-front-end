import styled from 'styled-components'

export const Ul = styled.ul `
list-style: none;
width: 50%;
margin: 0;
li {
    border: 1px solid #c0c0c0;
    padding: 15px 0;
    padding-right: 15px;
}

`

export const Ula = styled.ul `
list-style: none;
display: flex;
position: relative;
align-items: center;
li {
    border: 1px solid #c0c0c0;
    padding: 8px 15px;
    :hover,
    :focus {
        outline: 2px solid #252079;
        border: 1px solid #252079;
    }
}
a {
    text-decoration: none;
}
`