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

export const Div = styled.div `
margin-top: 4%;
display: flex;
justify-content: space-evenly;

.first{
    position: relative;
    left: 11%;
    top: 3.5%;
    @media (max-width: 1270px) {
    left: 2%;  
    }
    @media (max-width: 985px) {
    text-align: center;
    top: 2%;  
    margin-right: 16px;
    }
    @media (max-width: 760px) {
    left: 5%;  
    top: 1%;
    margin-right: 10px;
    }
    h1{
        font-size: 60px;
        font-weight: 700;
    }

    p{
       font-style: italic; 
    }
}
`
export const Skele = styled.div `
display: flex;
flex-wrap: wrap;
position: relative;
top: 1.2%;
height: 30%;
width: 100%;
@media (max-width: 1000px) {
 justify-content: space-evenly;
 width: 100%;
 height: 110%;  
}
@media (max-width: 760px) {
flex-direction: column;
height: 100%;
position: absolute;
top: 60%;
}
.image {
    background-color: rgba(165, 165, 165, 0.493);
    width: 30%;
    height: 100%;
    position: relative;
    animation: beat 1s infinite ease-in-out;
    left: 15%;
    @media (max-width: 1000px) {
        width: 60%;
        height: 110%;
        position: absolute;
        top: 0;
        left: 5%;
    }
    @media (max-width: 760px) {
        height: 50%;
        width: 90%;
        position: relative;
    }
}
.info {
    width: 35%;
    height: 100%;
    position: relative;
    left: 19%;
    top: 0;
    @media (max-width: 1000px) {
        height: 150%;
        top: 0;
        left: 50%;
    }
    @media (max-width: 760px) {  
        position: absolute;
        top: 77%;
        width: 80%;
        left: 5%;
    }
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
`
{/*
border: 2px solid black;
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
    border: 2px solid black;
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
    border: 3px solid black;
    @media (max-width: 1000px) {
    left: 0;
}
    .date {
        display: flex;
    }
}
*/}