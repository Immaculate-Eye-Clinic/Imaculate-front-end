import styled from 'styled-components'

export const Body = styled.div `
display: flex;
margin: 50px;

.info {
    position: relative;
    right: 7%;
    @media (max-width: 1400px) {
    right: 10%;  
    }
    .date {
        display: flex;
        
        .p{
            
        }
    }
}

.image {
    position: relative;
    left: 8%;
    @media (max-width: 1400px) {
    left: -5%;  
}
}
`

export const Div = styled.div `
margin-top: 20%;
display: flex;
justify-content: space-evenly;
`
export const Cat = styled.div `
display: flex;
position: relative;
top: 8.5%;
right: 50%;
flex-direction: column;
width: 250px;
text-align: center;
@media (max-width: 1400px) {
  right: 0;  
}
.head {
    background-color: #252079;
    padding: 19px 0;
    font-size: 14px;
    color: white;
    text-align: left;
}
.body {
    text-decoration: none;
}
.category {

}
`