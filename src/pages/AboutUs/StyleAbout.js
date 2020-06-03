import styled from 'styled-components'

export const Container = styled.div `
    margin: auto;
    width: 80%;
    margin-top: 5em;

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

    .aboutUs_container{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto 6em;
        overflow: hidden;

        @media (min-width: 760px){
            width: 90%;
    }
    }
`