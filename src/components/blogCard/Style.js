import styled from 'styled-components'

export const Div = styled.div`
color: blue;
border: 1px;
width: 25%;
border-radius: 1em;
box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.3);
margin: 2em;
padding: 0;
&:hover {
    box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.8), 0 8px 22px 0 rgba(0, 0, 0, 0.6);
}
img{
    width: 100%;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
}
p{
    text-align: center;
    font-size: 14px;
    margin: 0;
    padding-bottom: 1em;
    padding-top: 1em;
}

@media (max-width: 760px){
    width: 40%;
    margin: 1em;
}
@media (max-width: 1200px){
    width: 35%;
    margin: 1em;
}
`