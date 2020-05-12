import styled from 'styled-components'

export const Div = styled.div`
display: flex;
justify-content: space-evenly;
position: relative;
margin-top: 29em;
@media (max-width: 760px){
    padding-right: 2em;
    display: flex;
    justify-content: space-evenly;
    margin-right: 3em;
}
`
export const Div1 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-left: 6em;
@media (max-width: 760px){
    padding-right: 1em;
}

`

export const Divs = styled.div `
position: relative;
width: 1000px;
justify-content: space-between;
flex-direction: row;
display: flex;
margin-top: 17em;
`