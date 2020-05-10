import styled from "styled-components";

export const StyleComments = styled.div`

    display: flex;
    color: black;
    margin-top: 0;
    padding-top:0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    border-radius: 5px;

    p{

    }

    .left_arrow {
        width: 10%;
        text-align: center;
        margin: 0;
        padding: 2px;
        box-sizing: border-box;


    }

    .left_arrow:hover{
        background-color: rgba(212, 214, 241, 0.100);
    }

    .right_arrow {
        width: 10%;
        padding: 2px;
        margin: 0;
        text-align: center;
        margin: 0, 0, 2px;
        box-sizing: border-box;
    }

    .right_arrow:hover{
        background-color: rgba(212, 214, 241, 0.100);
    }

    .slider-text {
        width: 60%;
        font-size: 1.3em;
        text-align: center;
        border-radius:10px;
        padding: 2px;
        box-sizing: border-box;
        
    }

    .inactive {
        display: none;
    }
    
    .active {
        display: block;
    }
`