import styled from "styled-components";

export const StyleComments = styled.div`

    background-color: #252079;
    min-height: 300px;
    padding: 70px;

    .title {
        font-weight: 800;
        font-size: 30px;
        text-align: center;
        color: white;
    }

    .body {
        display: flex;
        padding-top: 50px;
        color: white;
        margin: 0px auto 0px;
        align-items: center;
        justify-content: center;
        width: 100%;

        .left_arrow {
        flex: 1;
        text-align: center;
        cursor: pointer;


        }

        .right_arrow {
            flex: 1;
            padding: 2px;
            margin: 0;
            text-align: center;
            cursor: pointer;
        }
        .slider-text {
            flex: 6;
            font-size: 19px;
            text-align: left;
        }

        .inactive {
            display: none;
        }
        
        .active {
            display: block;
        }
        @media (max-width: 990px) {
            .slider-text {
                font-size: 17px;
                text-align: left;
            }
        }
    }

`