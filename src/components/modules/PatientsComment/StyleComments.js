import styled from "styled-components";

export const StyleComments = styled.div`

    display: flex;
    color: white;
    margin: 0px auto 50px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background-color: #252079;


    .left_arrow {
        flex: 1;
        text-align: center;


    }

    .left_arrow:hover{
        background-color: rgba(212, 214, 241, 0.100);
    }

    .right_arrow {
        flex: 1;
        padding: 2px;
        margin: 0;
        text-align: center;
    }

    .right_arrow:hover{
        background-color: rgba(212, 214, 241, 0.100);
    }

    .slider-text {
        flex: 6;
        font-size: 1.3em;
        text-align: center;
    }

    .inactive {
        display: none;
    }
    
    .active {
        display: block;
    }
`