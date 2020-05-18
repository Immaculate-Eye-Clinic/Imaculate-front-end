import styled from 'styled-components'

export const Div = styled.div`
    overflow: hidden;
    background: silver;
div{
    margin-top: 4em;

    .container{
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grip-gap: 7rem;
        padding: 0 3rem;

        @media screen and (max-width: 1050px){
            grid-gap: 5rem;
        }

        .phone{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            img{
                width: 700px;

                @media screen and (max-width: 900px){
                    display: none;
                }
            }
        }

        .sign-up{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
            form{
                width: 360px;

                @media screen and (max-width: 1000px){
                    width: 290px;    
                }

                img{
                    width: 100px;
                    @media screen and (max-width: 1000px){
                        width: 400px;
                    }
                }
                h2{
                    font-size: 2.9rem;
                    text-transform: uppercase;
                    margin: 15px 0;
                    color: #333;
                    @media screen and (max-width: 1000px){
                        font-size: 2.4rem;
                        margin: 8px 0;
                    }
                }
                .input-div{
                    margin: 0;
                    
                    span{
                        display: grid;
                        grid-template-columns: repeat(1, 1fr);
                        margin: 1px 0;
                        padding: 1px 0;
                        border-bottom: 2px solid #d9d9d9;
                        position: relative;
                        height: 80px;

                        h5{
                            position: absolute;
                            left: 10px;
                            top: 50%;
                            transform: translateY(-50%);
                            color: black;
                            display: none;
                            font-size: 18px;
                            transition: .3s;
                            
                        }

                        input{
                            position: absolute;
                            width: 100%;
                            height: 40%;
                            top: 0;
                            left: 0;
                            border: none;
                            outline: none;
                            background: none;
                            padding: 0;
                            margin-top: 2.4em;
                            font-size: 1.2rem;
                            color: black;
                        }
                    }
                    button{
                        display: block;
                        width: 100%;
                        height: 50%;
                        border-radius: 25px;
                        margin: 1rem 0;
                        padding: 1rem;
                        font-size: 1.2rem;
                        outline: none;
                        border: none;
                        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
                        cursor: pointer;
                        text-transform: uppercase;
                        background-size: 200%;
                        transition: .5s;
                        :hover{
                            background-position: right;
                        }
                    }
                }
            }
        }
        
    }
    }
}
`