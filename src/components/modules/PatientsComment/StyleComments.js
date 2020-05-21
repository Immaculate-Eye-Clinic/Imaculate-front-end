import styled from "styled-components";

export const StyleComments = styled.div`

    background-color: #252079;
    min-height: 200px;
    padding: 70px;

    @media (max-width: 990px) {
        padding: 20px 10px 0px;
    }


    .title {
        font-weight: 800;
        font-size: 30px;
        text-align: center;
        color: white;
    }

    .body {
        display: flex;
        padding-top: 30px;
        color: white;
        margin: 0px auto 0px;
        align-items: center;
        justify-content: space-between;

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
            text-align: justify;
        }

        .inactive {
            display: none;
        }
        
        .active {
            display: block;
        }
        @media (max-width: 990px) 
        {
            .slider-text {
                font-size: 15px;
                text-align: center;
                flex: 14;
            }

            .right_arrow {
            text-align: right;
            cursor: pointer;
            margin-right: 0;
            padding-right: 0;
            }

            .left_arrow {
            text-align: left;
            cursor: pointer;
            }
        }
    }

`