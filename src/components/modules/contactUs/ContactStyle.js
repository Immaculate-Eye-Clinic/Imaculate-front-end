import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;
display: flex;
flex-wrap: wrap-reverse;
width: 100%;

.img{
    width: 50%;
    display: flex;
    @media (max-width: 800px){
        width: 100%;
    }
    img{
        width: 100%;
    }
}

.body{
    width: 50%;
    background: silver;
    box-sizing: border-box;
    @media (max-width: 800px){
        width: 100%;
        padding-bottom: 30px;
    }
    .div{
        margin: 85px;
        
        @media (max-width: 1200px){
            margin: 60px 70px 60px 20px;
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
            height: 250px;
            padding: 10px 30px;
            border: none;
            box-sizing: border-box;
            @media (max-width: 1200px){
                width: 100%;
                margin: 0;
            }
        }
        
        .below{
            display: flex;
            justify-content: space-between;
            width: 100%;
            @media (max-width: 800px){
                display: block;
            }
            .p{
            font-size: 12px;
            margin-right: 10px;
            }
            button{
                padding: 5px 60px;
                margin-top: 8px;
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
                    width: 100%;
                    padding: 20px 30px;
                }
                @media (max-width: 800px){
                    width: 100%;
                    padding: 15px 30px;
                }
            }
        }
    }
}
`