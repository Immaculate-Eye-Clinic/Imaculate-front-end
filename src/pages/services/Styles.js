import styled from "styled-components"

export const Page = styled.div`
    margin: auto;
    width: 90%;
    margin: 5em auto 5em;

    .text_paragraph{
        line-height: 25px;
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
            @media (max-width: 760px) {
            font-size: 40px;
        }
        }
    .immaculate_text{
        font-size:  50px;
        font-weight: bolder;
        color: #252079;

        @media (max-width: 760px) {
            font-size: 40px;
        }
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
    box-sizing: border-box;
    width: 500px;
    min-width: 310;
    height: 310px;
    max-height: 350px;
    margin: 1em;

    @media (max-width: 700px) {
        margin: 1em 0 1em;
        width: 100%;
        height: 250px;
        padding: 0;
    }
    @media (max-width: 900px) {
        margin: 1em 0 1em;
        width: 100%;
        height: 350px;
        padding: 0;
    }
    @media (min-width: 901px) {
        width: 320px;
        height: 250px;
    }
    @media (min-width: 1441px) {
        width: 560px;
    }

    .card{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 100%;

        :hover .caption_container{
                    filter: blur(4px);
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
            background-size: 100% 100%;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            margin: auto;

            
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    color: white;
                    text-align: center;
                    width: 270px;
                    padding: 20px;
                    margin: auto;

                @media  (min-width: 400px){
                    width: 285px;
                }
                @media  (min-width: 500px){
                    width: 365px;
                }
                @media  (min-width: 600px){
                    width: 446px;
                }
                @media  (min-width: 700px){
                    width: 527px;
                }
                @media  (min-width: 800px){
                    width: 680px;
                }
                @media  (min-width: 900px){
                    width: 771px;
                }
                @media  (min-width: 901px){
                    width: 280px;
                }
                @media (min-width: 1441px) {
                    width: 520px;
                }
                }
            }

            @media (min-width: 1024px){
                
                :hover  button {
                visibility: visible;
                opacity:  1;
                transition: 0.6s;
                }
            }
        }
    
`

export const FlexStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1em auto 6em;
    width: 90%;

    @media (min-width: 760px){
        margin: auto;
        margin-right: 0;
        width: 100%;
    }
`