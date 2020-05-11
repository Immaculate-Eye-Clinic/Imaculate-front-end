import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .what {
        text-align: center;
        color: #252079;
        font-size: 30px;
        font-weight: bolder;
    }
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
        width: 80%;
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
                font-weight: 1000;
                padding-top: 90px;
                color: #252079;
            }
        }
    }
`