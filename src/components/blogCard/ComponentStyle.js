import styled from 'styled-components'

export const Div = styled.div`
display: flex;
justify-content: space-evenly;

`

export const Div1 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
@media (max-width: 760px){
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
}
`