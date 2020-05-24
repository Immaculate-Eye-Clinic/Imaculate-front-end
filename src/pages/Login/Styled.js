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
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 7rem;
padding: 0 2rem;


.img {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img{
    width: 500px;
}
}
.login-container {
    display: flex;
    align-items: center;
    text-align: center;

    .box {
    position: absolute;
    margin: 20px;
    padding: 10px 0;
    border-radius: 20px;
    box-sizing: border-box;

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
    left: 0;
    text-decoration: none;
    color: #252079;
    font-size: 13px;
}
}

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
        margin-left: 3.5em;
        margin-top: 75%;
        width: 290px;
        }
    }

    @media screen and (max-width: 400px) {
        .login-container {
            margin-left: -1em;
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
