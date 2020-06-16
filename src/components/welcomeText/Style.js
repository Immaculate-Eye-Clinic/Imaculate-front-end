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
    width: 600px;
    text-align: center;
    .title{
        color: #252079;
        font-weight: bolder;
        font-size: 25px;
        padding-top: 50px;
    }
    p{
        line-height: 30px;
    }
}
.image{
    display: none;
    min-width: 300px;
    @media (min-width: 769px){
        display: block;
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