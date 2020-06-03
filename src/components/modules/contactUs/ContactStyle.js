import styled from 'styled-components'

export const Div = styled.div`
.main{
overflow: hidden;
display: flex;
flex-wrap: wrap-reverse;
width: 100%;
height: 100%;

input {
    ::placeholder{
        color: #252079;
        font-weight: 700;
    }
    :focus {
        outline: 2px  #252079;
    }
}
.img{
    width: 50%;
    
    @media (max-width: 800px){
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
    }
}

.body{
    width: 50%;
    background: #c0c0c0;
    box-sizing: border-box;
    @media (max-width: 800px){
        width: 100%;
        padding-bottom: 30px;
    }
    .div{
        margin: 85px 85px 10px 85px;
        @media (max-width: 1200px){
            margin: 60px 70px 40px 20px;
        }
        @media (max-width: 800px){
        margin: 10px;
        }
        h3{
            font-size: 20px;
            letter-spacing: 3px;
            font-weight: 200;
        }
        h1{
            font-size: 58px;
        }

        p{
            font-size: 14px;
        }
        
        .info{
            .number{
            color: #252079;
            }
        }

        .name, .subject{
            width: 100%;
            padding: 15px 30px;
            border: none;
            box-sizing: border-box;
                :focus {
                    outline: 2px solid #252079;
                }
                ::placeholder{
                    color: #252079;
                }
            @media (max-width: 1200px){
                width: 100%;
                margin: 0;
            }
        }

        .div1{
            display: flex;
            justify-content: space-between;
            width: 103.5%;
            padding-bottom: 15px;
            
            @media (max-width: 800px){
                display: block;
                width: 100%;
                padding: 0;
            }
            .email, .phone{
                width: 45%;
                padding: 15px 30px;
                border: none;
                outline: none;
                box-sizing: border-box;
                @media (max-width: 1200px){
                    width: 45%;
                    margin: 0;
                }
                @media (max-width: 800px){
                    width: 100%;
                }
            }
        }
        
        textarea{
            width: 100%;
            height: 100px;
            padding: 10px 30px;
            border: none;
            box-sizing: border-box;
                :focus {
                    outline: 2px solid #252079;
                }
                ::placeholder{
                    color: #252079;
                    font-weight: 700;
                }
            @media (max-width: 1200px){
                width: 100%;
                margin: 0;
            }
        }
        
        .below{
            display: grid;
            grid-template-columns: 50% 50%;
            width: 100%;
            margin-top: 30px;
            @media (max-width: 800px){
                display: block;
            }
            .p{
            font-size: 11.5px;
            margin-right: 20px;
            width: 100%;
                @media (max-width: 800px){
                    width: 100%;
                }
            }
            .span{
                button{
                width: 70%;
                float: right;
                padding: 10px 10px;
                margin-top: 8px;
                text-align: center;
                text-decoration: none;
                font-size: 16px;
                border: none;
                background: #252079;
                color: white;
                box-sizing: border-box;
                border-radius: 15px;
                cursor: pointer;
                    :hover{
                        background: #252060;
                    }
                    @media (max-width: 800px){
                        width: 100%;
                        padding: 15px 30px;
                    }
                }
            }
        }
    }
}
}
`