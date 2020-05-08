import styled from 'styled-components'

export const Div = styled.div`
color: blue;
border: 1px;
width: 400px;
border-radius: 1em;
box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.3);
margin: 0;
padding: 0;
&: hover {
    box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.8), 0 8px 22px 0 rgba(0, 0, 0, 0.6);
}
img{
    width: 100%;
    height: 100%;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
}
p{
    width: 400px;
    font-size: 16px;
    margin: 0;
    padding-bottom: 1em;
}
`