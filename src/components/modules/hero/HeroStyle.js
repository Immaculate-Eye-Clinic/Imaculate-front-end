import styled from "styled-components"

export const HeroStyle = styled.div`
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/hisroyalwonginess/image/upload/v1588437898/Immaculate/Doctors_ieplxk.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
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