import styled from 'styled-components'

export const Body = styled.div `
display: flex;
margin: 50px;
    @media (max-width: 1000px) {
    justify-content: center;  
    }
    @media (max-width: 760px) {
    flex-wrap: wrap;  
    }

.info {
    position: relative;
    right: 7%;
    @media (max-width: 1270px) {
    right: 10%;  
    }
    @media (max-width: 1000px) {
    right: 0%;  
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
    left: 0;
    img{
        width: 90%;
    }  
    }
    @media (max-width: 760px) {
    left: 0; 
    img{
        width: 100%;
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
    h1{
        font-size: 60px;
        font-weight: 700;
    }

    p{
       font-style: italic; 
    }
}
`
export const Cat = styled.div `
display: flex;
position: relative;
top: 9.5%;
right: 50%;
flex-direction: column;
width: 250px;
text-align: center;
@media (max-width: 1270px) {
  right: 0;  
}
@media (max-width: 1000px) {
  display: none; 
}
.head {
    background-color: #252079;
    padding: 19px 0;
    font-size: 14px;
    color: white;
    text-align: left;
    strong {
        margin-left: 14px;
    }
}
.body {
    background: #b2beb5;
    padding-top: 6px;
    padding-bottom: 8px;
    text-align: left;
    a {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    margin-left: 2px;
}
}
.category {

}
`