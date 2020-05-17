import styled from 'styled-components'


export const Div1 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-left: 3em;
@media (max-width: 760px){
    padding-right: 1em;
}

`

export const Divs = styled.div `
position: relative;
width: 1000px;
justify-content: center;
flex-direction: row;
display: flex;
margin-top: 17em;

@media (max-width: 992px){
    width: 50%;
   
    margin-left: 11em;
}


@media (max-width: 760px){
    width: 50%;
    
    margin-left: 20em;
}


`