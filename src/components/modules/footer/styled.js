import styled from 'styled-components'

export const Wrapper = styled.div `
background: url(/Asset/Img/EyeCareBackground.jpg);
background-size: 100%;
position: relative;
color: white;
`
export const Diw = styled.div `
background: #9370db;
opacity: 0.8;
`

export const Div = styled.div `
display: flex;
justify-content: space-evenly;
div {
    text-align: center;
    width: 45%;
}
`
export const Div1 = styled.div `
margin-left: 4em;
margin-top: 2em;
.name {
    color: #00008b;
    span {
            color:  #00008b;
            font-weight: 500;
            font-size: 18px;
            font-style: normal;
        }
        h1 {
            display: inline;
        }
}
`
export const Div2 = styled.div `
margin-top: 9em;
margin-right: 5em;
`
export const Div3 = styled.div `
margin-top: 9em;
`
export const Dim = styled.div `
div {
    display: flex;
    justify-content: space-evenly;
    .a {
        margin-left: 16em;
    }
    .b {
        margin-right: 16em;
    }
}
`