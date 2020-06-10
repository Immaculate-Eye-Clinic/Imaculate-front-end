import styled from 'styled-components'

export const Body = styled.div `
display: flex;
justify-content: space-evenly;
flex-direction: row;
align-items: center;
margin: 50px;
width: 150%;
height: 90%;
@media (max-width: 1000px) {
    position: relative;
    width: 250%;
    align-items: center;
}
@media (max-width: 760px) {
    flex-wrap: wrap;
    left: -15%;
}

.image{
    width: 220%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        @media (max-width: 1000px) {
            position: relative;
            left: -15%;
        }
        @media (max-width: 760px) {
            left: 0;
        }
    }
}
.info {
    position: relative;
    left: 13%;
    margin: 20px;
    width: 250%;
    @media (max-width: 1000px) {
    left: 0;
}
    .date {
        display: flex;
    }
    h2 {
        color: #252079;
    }
    a {
        text-decoration: none;
        color: #252079;
    }
}
`

export const Skele = styled.div `
.div{
display: flex;
height: 30%;
width: 100%;
border: 2px solid black;
position: relative;

.image {
    background-color: rgba(165, 165, 165, 0.493);
    width: 30%;
    height: 100%;
    animation: beat 1s infinite ease-in-out;

}
.info {
    width: 35%;
    height: 100%;
   
       .line {
        height: 6px;
        margin: 30px;
        animation: beat 1s infinite ease-in-out;
        background: rgba(165, 165, 165, 0.493);
        @media (max-width: 1000px) {
        margin: 35px;
        height: 12px;
    }
        @media (max-width: 760px) {
        margin: 14px;
        height: 6px;
        width: 80%;
    }
    }
    div:nth-child(1) {
        width: 30%;
    }
    div:nth-child(2) {
        width: 80%;
        height: 9px;
    }
    div:nth-child(3) {
        width: 60%;
    }
    div:nth-child(4) {
        width: 45%;
    }
    div:nth-child(5) {
        width: 20%;
    }
}

@keyframes beat {
    0% {
        background-color: rgba(165,165,165,.1);
    }
    50% {
        background-color: rgba(165,165,165,.3);
    }
    0% {
        background-color: rgba(165,165,165,.1);
    }
}
}
`

export const Skelet = styled.div `
margin-left: 10%;
`
