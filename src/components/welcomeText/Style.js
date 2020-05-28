import styled from 'styled-components'

export const Div = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 2.5em;
background: white;
color: black;
.welcome{
    width: 500px;
    height: 100%;
    h2{
        color: #252079;
    }
    p{
        line-height: 30px;
    }
}
.hours{
    width: 500px;
    h1{
        color: #252079;
    }
    hr{
        border-top: 1px dashed #252079;
    }
    .days{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
`