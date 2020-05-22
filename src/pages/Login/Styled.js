import styled from 'styled-components'

export const Div = styled.body `
padding: 0;
margin: 0;
background: teal;
overflow: hidden;
width: 100%;
height: 100vh;
font-family: cursive;

.div {
margin-top: 8%;
background: teal;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 7rem;
padding: 0 2rem;
}

.img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.img img{
    width: 500px;
}

.login-container {
    display: flex;
    align-items: center;
    text-align: center;
}

.box {
    position: absolute;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
    box-sizing: border-box;
}

.box h1 {
    padding: 0 0 15px;
    margin: 15px;
    font-size: 35px;
    color: #ffe1a8;
    text-align: center;
    letter-spacing: 2px;
    user-select: none;
}

.box .inputbox {
    position: relative;
    top: 0;
    margin: 40px 0 40px;
}

.box .inputbox input,
.box .inputbox button
 {
    padding: 0 35px;
    margin: 0;
    width: 100%;
    height: 27px;
    background: transparent;
    font-size: 17px;
    outline: none;
    letter-spacing: 1px;
    color: #fffab5;
    border: #ffffc1 2px solid;
    box-sizing: border-box;
    border-radius: 8px;
}

.box .inputbox label {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 5px;
    left: 35px;
    font-size: 15px;
    color: #ffcb76cb;
    letter-spacing: 1px;
    pointer-events: none;
    transition: .2s;
}

.box .inputbox input:focus ~ label,
.box .inputbox input:valid ~ label {
    top: -27px;
    left: 5px;
    color: #becdff;
    font-size: 13px;
}

.box .inputbox button {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 15px;
    left: 50%;
    width: 90%;
    height: 35px;
    transform: translate(-50%,-50%);
    font-size: 16px;
    color: #d5ebff;
    border-color: #d5ebff;
    outline: none;
    cursor: pointer;
    transition: .1s;
}

.box .inputbox button:hover {
    width: 95%;
    height: 40px;
    font-size: 18px;
    background: #f1ccff25;
    font-weight: bold;
}

.box a {
    position: relative;
    top: 25px;
    left: 0;
    text-decoration: none;
    color: #899bd6;
    font-size: 16px;
    transition: .1s;
}



.box a:hover {
    color: #c6d3ff;
    text-shadow: 0 0 5px #c6d3ff;
}

@media screen and (max-width: 1050px) {
  .div {
      grid-gap: 5rem;
  }  
}

@media screen and (max-width: 1000px) {
   

    form{
        width: 290px;
    }

    form h2{
        font-size: 2.4rem;
        margin: 8px 0;
    }

    .img img{
        width: 400px;
    }
}

@media screen and (max-width: 900px) {
    .img{
        display: none;
    }

    .container{
        grid-template-columns: 1fr;
    }

    .login-container{

        margin-left: 14em;
        margin-top: 40%;
        width: 290px;
    }
}

@media screen and (max-width: 800px) {
    .login-container{
        justify-content: center;
        align-items: center;
        margin-left: 14em;
}
}


@media screen and (max-width: 700px) {
    .login-container {
        margin-left: 10em;
        margin-top: 50%;
        width: 290px;
    }
}


@media screen and (max-width: 650px) {
    .login-container {
        margin-left: 8em;
    }
}


@media screen and (max-width: 600px) {
    .login-container{
        margin-left: 5.2em;
      }
    }

    @media screen and (max-width: 500px) {
        .login-container {
        margin-left: 1.5em;
        margin-top: 85%;
        width: 290px;
        }
    }

    @media screen and (max-width: 400px) {
        .login-container {
            margin-left: -1em;
        }
    }

   
`
