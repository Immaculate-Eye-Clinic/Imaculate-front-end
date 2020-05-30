import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
display: flex;
flex-wrap: wrap-reverse;

.img{
    width: 49.5%;
    @media (max-width: 800px){
        width: 100%;
    }
    img{
        width: 100%;
    }
}

.body{
    width: 49.5%;
    background: silver;
    box-sizing: border-box;
    @media (max-width: 800px){
        width: 100%;
    }
    .div{
        margin: 60px;
        @media (max-width: 1200px){
            margin: 60px 20px;
        }
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

        input{
            width: 90%;
            padding: 10px 30px;
            border: none;
            box-sizing: border-box;
            @media (max-width: 1200px){
                width: 100%;
                margin: 0;
            }

        }
        
        textarea{
            width: 90%;
            height: 200px;
            padding: 10px 30px;
            border: none;
            box-sizing: border-box;
            @media (max-width: 1200px){
                width: 100%;
                margin: 0;
            }
        }
        
        .below{
            width: 90%;
            display: block;
            box-sizing: border-box;
        
            .p{
            font-size: 12px;
            }
            button{
                padding: 10px 50px;
                font-size: 14px;
                border: none;
                background: #252079;
                color: white;
                box-sizing: border-box;
                cursor: pointer;
                :hover{
                    background: #252060;
                }
                @media (max-width: 1200px){
                    width: 110%;
                    padding: 10px 50px;
                    margin: 0;
                }
            }
        }
    }
}
`