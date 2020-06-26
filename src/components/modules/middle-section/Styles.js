import styled from 'styled-components'

export const Style = styled.div`
    width: 90%;
    color: red;
    margin: auto;


    .container_div{


            .first_section{
                flex-basis: 32%;
                box-sizing: border-box;
                background-color: #f0f0f0;
                margin-bottom: 2em;
                border-radius: 30px 0 0;


                .sub_container_first{
                    padding: 8%;

                    h3{
                        margin-top: 0;
                        color: #252079;
                    }
                }
            }


            .photo_section{
                flex-basis: 32%;
                box-sizing: border-box;
                margin-bottom: 2em;

                img{
                    width: 100%;
                    box-shadow: 4px 4px 20px gray;

                    :hover{
                        box-shadow: 10px 10px 20px gray;
                        transition: 0.5s
                    }
                }
            }


            .working_hours{
                color: black;
                background-color: #f0f0f0;
                flex-basis: 32%;
                box-sizing: border-box;
                margin-bottom: 2em;
                border-radius: 0 0 30px;

                .sub_container_hours{
                    padding: 8%;

                    hr{
                        margin-bottom: 2em;
                        background-color: gray;
                        border: none;
                        height: 1px;
                    }
                
                    h3{
                        margin-top: 0;
                        color: #252079;
                    }


                    .days_container{
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        width: 80%;
                    }
                }
            }
    }

    @media (min-width: 900px){
        .container_div{
            display: flex;
            justify-content: space-between
        }
    }
`