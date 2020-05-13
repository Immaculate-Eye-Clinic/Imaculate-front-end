import styled from 'styled-components'

export const Div = styled.div`
display: flex;
justify-content: space-evenly;
@media (max-width: 760px){
    padding-right: 2em;
}
`

export const Div1 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-left: 3em;
margin-left: 5em;
@media (max-width: 760px){
    margin-left: 2em;
    padding: 0;
}
`