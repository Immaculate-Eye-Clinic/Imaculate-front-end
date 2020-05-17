import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;

`
export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
@media (max-width: 760px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.title {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
}

`

export const Divs = styled.div `
position: relative;
width: 1000px;
justify-content: space-evenly;
flex-direction: row;
display: flex;
margin-top: 17em;

@media (max-width: 992px){
    width: 50%;
   
    margin-left: 11em;
}


@media (max-width: 760px){
    width: 50%;
    
    margin-left: 20em;
}

`