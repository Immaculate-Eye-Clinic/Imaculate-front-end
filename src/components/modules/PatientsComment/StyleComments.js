import styled from "styled-components";

export const StyleComments = styled.div`

    display: flex;
    margin: 0px auto 20px;
    align-items: center;
    align-content: space-between;
    width: fit-content;
    max-width: 1000px;

    .left_arrow {
        flex: 1;
        text-align: center;
    }

    .right_arrow {
        flex: 1;
        padding: 0;
        margin: 0;
        text-align: center;
        margin: 0, 0, 10px;
        height: 100%;
    }

    .slider-text {
        flex: 6;
        font-size: 1.3em;
        text-align: center;
        border-radius:10px;
        
    }

    .inactive {
        display: none;
    }
    
    .active {
        display: block;
    }
`