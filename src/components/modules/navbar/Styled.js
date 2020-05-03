import styled from 'styled-components'

export const Div = styled.header`
display: flex;
justify-content: space-between;
background: transparent;
`
export const A = styled.div `
padding: 25px;
color: #0000cd;
text-decoration: none;
font-weight: 800;
font-size: 18px;
:hover {
        cursor: pointer;
    }

`

export const Div2 = styled.ul `
display: flex;
justify-content: space-between;
margin: 2em;
padding-bottom: 2em;
align-content: center;
.active {
    border-bottom: 0.4em solid #0000cd;
}
.nav {
    text-decoration: none;
}
`
export const H1 = styled.h1 `
color: #00008b;
`
export const Div1 = styled.div `
margin-left: 3em;
`
export const P1 = styled.p `
font-size: 20px;
color: #0000cd;
font-weight: 600;
`
export const D = styled.div `
margin-bottom: 1em;
`
