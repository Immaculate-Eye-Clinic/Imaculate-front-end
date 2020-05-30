import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
display: flex;
flex-wrap: wrap-reverse;

.body{
    width: 700px;
    border: 3px solid black;
    background: silver;
    .div{
        margin: 60px;
        border: 3px solid black;
        h3{
            font-size: 20px;
            letter-spacing: 3px;
            font-weight: 200;
        }
        h1{
            font-size: 50px;
        }
        .number{
            color: #252079;
        }

        .name, .subject{
            width: 70%;
            padding: 10px 20px;
            border: none;
        }
        .email{
            width: 30%;
            padding: 10px 20px;
            border: none;
        }
        .phone{
            width: 30%;
            padding: 10px 20px;
            border: none;
            margin-left: 3%;
        }
        textarea{
            width: 76%;
            height: 200px;
        }
        
        .below{
            display: flex;
            .p{
            font-size: 12px;
            }
            button{
                padding: 18px;
                font-size: 14px;
                border: none;
                margin-left: 3%;
                background: #252079;
                color: white;
                cursor: pointer;
            }
        }
    }
}
`