import styled from 'styled-components'

export const Div = styled.div`
color: blue;
border: 1px;
width: 350px;
box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.3);
margin: 3em;
border-radius: 1em;
:hover {
    box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.8), 0 8px 22px 0 rgba(0, 0, 0, 0.6);
}
`
export const Img = styled.img`
width: 100%;
height: 100%;
border-top-right-radius: 1em;
border-top-left-radius: 1em;
`
export const P = styled.p`
margin: 1em;
padding-bottom: 1em;
`