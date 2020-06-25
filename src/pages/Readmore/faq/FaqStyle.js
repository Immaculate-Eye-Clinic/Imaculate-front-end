import styled from 'styled-components'

export const Div = styled.div`
margin: 100px 300px;
@media (max-width: 1200px){
    margin: 50px 150px;
}
@media (max-width: 850px){
    margin: 50px;
}
@media (max-width: 750px){
    margin: 20px;
}
.services{
    margin-bottom: -70px;
    @media (max-width: 1200px){
        margin-bottom: -40px;
    }
    @media (max-width: 1200px){
        margin-bottom: -10px;
    }
    h2{
        color: #252079;    
    }
    .service-button{
        width: 100%;
        display: flex;
        border: none;
        outline: none;
        font-size: 18px;
        font-weight: 700;
        padding: 10px;
        background: none;
        cursor: pointer;
        @media (max-width: 550px){
            text-align: left;
        }
        .space{
            flex: 1;
        }
        h3{
            color: #252079;
            padding: 0;
            margin: 0;
        }
    }
}
`