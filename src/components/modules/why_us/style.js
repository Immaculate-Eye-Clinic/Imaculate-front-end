import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .all {
        width: 100%;
        display: flex;
        margin: auto;
        flex-wrap: wrap;
    }
    .why {
        display: flex;
        justify-content: space-around;
        align-content: baseline;
        flex-wrap: wrap;
        width: 90%;
        margin: auto;

        .image {
            img {
            width: 300px;
            height: 300px;
            }
        }
        .text {
            width: 500px;
            height: 100%;
            .title {
                font-size: 25px;
                font-weight: 700;
                padding-top: 90px;
            }
        }
    }
`