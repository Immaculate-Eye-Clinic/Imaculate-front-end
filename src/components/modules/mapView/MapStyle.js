import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
display: flex;
flex-wrap: wrap;
width: 100%;
box-sizing: border-box;
    @media (max-width: 900px){
        display: block;
        position: relative;
    }

.text-section{
    width: 50%;
    box-sizing: border-box;
    @media (max-width: 900px){
        width: 95%;
    }
    .div{
        margin: 60px 100px 60px 10px;
            @media (max-width: 900px){
                margin: 60px 100px 60px 50px;
            }
    }
    .first{
        font-size: 19px;
        margin-bottom: 32px;
    }
    p{
        font-size: 14px;
        margin-bottom: 32px;
    }
    .second{
        font-size: 19px;
        margin-bottom: 30px;
    }
    .third{
        font-size: 19px;
        font-weight: 100;
        margin-bottom: 30px;
        .a1{
            color: #252079;
            text-decoration: none;
            font-weight: 800;
            :hover{
                text-decoration: underline;
            }
        }
    }
    .forth{
        font-size: 16px;
        font-weight: 100;
        .a2{
            color: black;
            text-decoration: none;
            font-weight: 800;
            :hover{
                text-decoration: underline;
            }
        }
    }
}
.map{
    width: 50%;
    box-sizing: border-box;
    
    @media (max-width: 900px){
        display: none;
    }
    
    .div2{
        margin: 60px 0 150px 50px;
    }
}
`