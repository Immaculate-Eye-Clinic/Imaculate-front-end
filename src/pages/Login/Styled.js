import styled from 'styled-components'

export const Div = styled.body `
padding: 0;
margin: 0;
background: whitesmoke;
overflow: hidden;
width: 100%;
height: 100vh;
font-family: cursive;

.div {
margin-top: 8%;
background: whitesmoke;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 0 2rem;


.img {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    left: 5%;
    top: 30%;

    img{
    width: 500px;
}
@media (max-width: 1000px) {
    display: none;
}
}


    .box {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 30%;
    right: 10%;
    margin: 20px;
    padding: 10px 0;
    border-radius: 20px;
    box-sizing: border-box;

    @media (max-width: 1000px) {
    position: relative;
    right: 0%;
}

    h1 {
    padding: 0 0 15px;
    margin: 15px;
    font-size: 35px;
    color: #252079;
    text-align: center;
    letter-spacing: 2px;
    user-select: none;
}
    .inputbox {
    position: relative;
    top: 0;
    width: 400px;
    margin: 40px 0 40px;

  

    input,
    button
 {
    padding: 0 35px;
    margin: 0;
    width: 100%;
    height: 40px;
    background: transparent;
    font-size: 17px;
    outline: none;
    letter-spacing: 1px;
    color: #252079;
    border: #252079 2px solid;
    box-sizing: border-box;
    border-radius: 8px;
    :focus ~ label,
    :valid ~ label {
    top: -27px;
    left: 5px;
    color: #252079;
    font-size: 13px;
}
}
label {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 10px;
    left: 35px;
    font-size: 15px;
    color: #252079;
    letter-spacing: 1px;
    pointer-events: none;
    transition: .2s;
}
button {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 15px;
    left: 50%;
    width: 40%;
    height: 35px;
    transform: translate(-50%,-50%);
    font-size: 16px;
    color: #d5ebff;
    background-color: #252079;
    border-color: #d5ebff;
    outline: none;
    cursor: pointer;
    transition: .1s;
}
}

  

a {
    position: relative;
    top: 30px;
    text-decoration: none;
    text-align: center;
    color: #252079;
    font-size: 13px;
}


}




}

.error {
    color: #dc143c;
    font-size: 14px;
    margin-top: 10px;
    text-align: left;
}
`
