import styled from "styled-components"

export const QuotesBackground = styled.div`

    position: relative;
    max-width: 500px;
    max-height: 80px;
    margin: 0 auto;
    top: 77%;
    border-radius: 3px;
    padding: 3px 3px 3px;
    text-align: center;
    display: block;
    font-size: 13px;
    line-height: 15px;
    color: rgb(220, 239, 255);


    @media only screen and (min-width: 375px) {
        max-width: 200px;
        font-size: 13px;
    }

    @media only screen
        and (device-width : 375px)
        and (device-height : 812px)
        and (-webkit-device-pixel-ratio : 3) {

            max-width: 250px;
            font-size: 13px;
            line-height: 12px;
            max-height: 100px;
        }

    @media only screen and (min-width: 768px) {
        max-width: 500px;
        font-size: 20px;
        line-height: 18px;
        max-height: 200px;
    }

    @media only screen and (min-width: 800px) {
        max-width: 500;
        font-size: 20px;
        line-height: 26px;
        max-height: 200px;
    }

    @media only screen and (min-width: 992px) {
        max-width: 500;
        font-size: 25px;
        line-height: 30px;
        max-height: 200px;
    }

    @media only screen and (min-width: 1200px) {
        max-width: 500;
        font-size: 30px;
        line-height: 35px;
        max-height: 200px;
    }



`