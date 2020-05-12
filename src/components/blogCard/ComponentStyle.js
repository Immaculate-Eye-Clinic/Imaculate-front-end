import styled from 'styled-components'

export const Div = styled.div`
display: flex;
justify-content: space-evenly;
@media (max-width: 992px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
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