import styled from 'styled-components'

export const Body = styled.div `
display: flex;
margin: 50px;
position: relative;
left: 3%;

    @media (max-width: 1000px) {
    flex-direction: row; 
    }
    @media (max-width: 760px) {
    flex-direction: column;  
    }
    .img {
        position: relative;
        img{
            position: relative;
        }
    }

.info {
    position: relative;
    left: 112.5%;
    width: 500em;
    height: 50%;
    @media (max-width: 1270px) {
    right: 10%;  
    }
    @media (max-width: 1000px) {
    left: 200%; 
    }
    @media (max-width: 760px) {
    width: 400%; 
    left: 0;
    }
   
    .date {
        display: flex;
    }
    h2 {
        color: #252079;
        font-weight: 900;
    }
    a {
        text-decoration: none;
        color: #252079;
    }
}
.image {
    position: relative;
    left: 8%;
    @media (max-width: 1270px) {
    left: -5%;  
    }
    @media (max-width: 1000px) {
    left: -30%;
    img{
        width: 2500%;
    }  
    }
    @media (max-width: 760px) {
    left: 0; 
    img{
        width: 400%;
    } 
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
 height: 1000%;   
}
.image {
    background-color: rgba(165,165,165,.1);
    width: 30%;
    height: 100%;
    position: relative;
    left: 15%;
}
.info {
    width: 35%;
    height: 90%;
    position: relative;
    left: 28%;
    top: 5%;
    .line {
        height: 6px;
        margin: 23px;
        animation: beat 1s infinite ease-in-out;
        background: gray;
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