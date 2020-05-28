import styled from "styled-components"

export const HeroStyle = styled.div`
    /* overflow: hidden;
    position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    height: ${props => props.height};
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 990px) {
        height: ${props => props.mobileHeight};;
    }

    .hero-text {
        width: 90%;
        text-align: center;
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;

        h1 {
            font-weight: bolder;

        }

        p {
            font-size: 20px;
        }
    }

`