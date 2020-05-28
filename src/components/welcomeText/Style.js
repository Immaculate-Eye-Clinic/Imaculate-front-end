import styled from 'styled-components'

export const Div = styled.div`
margin-top: 1.5em;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 2.5em;
background: white;
color: black;


.welcome{
    width: 500px;
    h2{
        color: #252079;
    }
    p{
        line-height: 30px;
    }
}
.image{
    min-width: 300px;
    @media (min-width: 769px){
        width: 500px;
        margin-top: 2em;
    }
    img{
        width: 300px;
        @media (min-width: 769px){
        width: 500px;
    }
    }
}


`