import styled from "styled-components";

export const StyleComments = styled.div`

    display: flex;
    margin: 0px auto;
    align-items: center;
    align-content: space-between;
    width: 60%;


    .left_arrow {
        flex: 1;
    }

    .right_arrow {
        flex: 1;
        text-align: right;
        padding: 0;
        margin: 0;
    }

    .slider-text {
        flex: 30;
    }

    .inactive {
        display: none;
    }
    
    .active {
        display: block;
    }
`