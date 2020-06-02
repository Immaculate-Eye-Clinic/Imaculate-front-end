import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
display: flex;
flex-wrap: wrap;
width: 100%;
box-sizing: border-box;

.text-section{
    width: 50%;
    .div{
        margin: 60px 0 150px 150px;
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
    .div2{
        margin: 60px 0 60px 10px;
    }
}
`