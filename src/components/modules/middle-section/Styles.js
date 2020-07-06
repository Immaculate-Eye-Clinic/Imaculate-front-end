import styled from 'styled-components'

export const Style = styled.div`
    width: 90%;
    margin: auto;


    .container_div{


            .first_section{
                flex-basis: 32%;
                box-sizing: border-box;
                background-color: #f0f0f0;
                margin-bottom: 2em;
                border-radius: 30px 3px 3px;


                .sub_container_first{
                    padding: 8%;
                    font-size: 15px;
                    line-height: 25px;

                    h3{
                        margin: 0 0 2em;
                        color: #252079;
                    }
                }
            }


            .photo_section{
                flex-basis: 32%;
                box-sizing: border-box;
                margin-bottom: 2em;
                font-size: 15px;

                h3{
                    color: #252079;
                }

                img{
                    width: 100%;
                    box-shadow: 4px 4px 10px gray;

                    :hover{
                        box-shadow: 7px 7px 20px gray;
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
                border-radius: 3px 3px 30px;

                .sub_container_hours{
                    padding: 10%;

                    hr{
                        margin-bottom: 2em;
                        background-color: #b0b0b0;
                        border: none;
                        height: 1px;
                    }
                
                    h3{
                        margin-top: 0;
                        color: #252079;
                        font-size: 25px;
                        font-weight: bolder;
                    }


                    .days_container{
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        width: 80%;
                        font-size: 15px;

                        .days{
                            color: #252079;
                            font-weight: bolder;
                            font-size: 17px;
                        }
                    }
                }
            }
    }

    @media (min-width: 1100px){
        .container_div{
            display: flex;
            justify-content: space-between
        }
    }
`

export const FirstSection = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    img{
        width: 30%;
        margin-bottom: 1em;
        border-radius: 3px;
        box-shadow: 2px 2px 3px gray;

        :hover{
            box-shadow: 7px 7px 20px gray;
            transition: 0.5s
        }
    }
`