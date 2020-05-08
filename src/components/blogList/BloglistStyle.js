import styled from 'styled-components'

export const Div = styled.div`
color: blue;
border: 5px solid black;
width: 90%;
padding: 3em;
border-radius: 1em;
&: hover {
    box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.8), 0 8px 22px 0 rgba(0, 0, 0, 0.6);
}
img{
    width: 30%;
    height: 30%;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
}
p{
    margin: 1em;
    padding-bottom: 1em;
}
`
export const Div1 = styled.div`
display: flex;
justify-content: space-between;
`
export const Div2 = styled.div`
display: flex;
justify-content: space-between;
`