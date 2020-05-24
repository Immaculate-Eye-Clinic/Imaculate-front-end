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
        font-size: 36px;
    }
}
.hours{
    width: 600px;
    h1{
        font-size: 38px;
    }
    hr{
        border-top: 1px dashed black;
    }
    .days{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
`