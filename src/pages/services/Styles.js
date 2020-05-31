import styled from "styled-components"

export const Cards = styled.div `
    align-items: center;
    width: 380px;

    

    .card{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;

        :hover .caption_container{
                    filter: blur(2px);
                }


        .caption_container{
            display: flex;
            align-content: center;
            justify-content: space-around;
            flex-wrap: wrap;
            text-align: center;
            background-image: url(${props => props.imgUrl});
            background-repeat: no-repeat;
            background-size: 380px 330px;
            width: 380px;
            height: 330px;

            
            
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
                    font-weight: bold;
                    font-size:15px;
                    color: white;
                    background: #252079;
                    border: none;
                }
                .caption{
                margin: 0 auto;
                font-weight: bold;
                font-size: 20px;
                line-height: 30px;
                color: white;
                text-align: center;
                width: 340px;
                padding: 20px;
                }
            }

            :hover  button {
                visibility: visible;
            }
        
        }
    

    
`