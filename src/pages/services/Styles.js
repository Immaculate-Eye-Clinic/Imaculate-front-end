import styled from "styled-components"

export const Page = styled.div`
    margin: auto;
    width: 80%;
    margin: 5em auto 5em;

    .text_paragraph{
        line-height: 20px;
        text-align: justify;
    }    
    .intro_text{
        font-weight: normal;
        font-size: 20px;
        letter-spacing: 3px;
        h4{
            margin-bottom: 0;
        }
        
    }
    h1{
            padding: 0;
            margin: 0;
            font-size:  50px;
        }
    .immaculate_text{
        font-size:  50px;
        font-weight: bolder;
        color: #252079;
    }
    .sub_text{
        font-size: 17px;
        h3{
            margin: 0;
        }
    }
    hr{
        margin: 2.5em 0 2.5em;
        border: none;
        height: 1px;
        color: black;
        background-color: #d3d3d3;
    }
`

export const Cards = styled.div `
    align-items: center;
    min-width: 280px;
    margin: 1em;
    @media (min-width: 1329px){
        min-width: 465px;
        margin: 1.5em;
    }

    

    .card{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        cursor: pointer;

        :hover .caption_container{
                    filter: blur(2px);
                    transition: 0.5s;
                }


        .caption_container{
            display: flex;
            align-content: center;
            justify-content: space-around;
            flex-wrap: wrap;
            text-align: center;
            background-image: linear-gradient(rgba(8, 1, 43, 0.63), rgba(8, 1, 43, 0.63)), url(${props => props.imgUrl});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 350px 300px;
            min-width: 280px;
            height: 250px;

            @media (min-width: 1329px){
                background-size: 465px 430px;
                min-width: 465px;
                height: 315px;
            }

            
            
        }
            .card_text{
                position: absolute;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;

                
                button{
                    margin: 0 auto;
                    padding: 0.5em 2em 0.5em;
                    visibility: hidden;
                    opacity: 0;
                    font-weight: bold;
                    font-size:15px;
                    color: white;
                    background: #252079;
                    border: none;
                    border-radius: 2px;

                    @media (max-width: 1024px){
                        visibility: visible;
                        opacity: 1;
                    }
                }
                .caption{
                margin: 0 auto;
                font-weight: bold;
                font-size: 20px;
                line-height: 30px;
                color: white;
                text-align: center;
                width: 240px;
                padding: 20px;

                @media (min-width: 1329px){
                    width: 425px;
                }
                }
            }

            @media (min-width: 1024px){
                
                :hover  button {
                visibility: visible;
                opacity:  1;
                transition: 0.8s;
            }
            }

        
        }
    

    
`

export const FlexStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1em 0 6em;
    width: 90%;

    @media (min-width: 760px){
        margin: auto;
        width: 85%;
    }
`