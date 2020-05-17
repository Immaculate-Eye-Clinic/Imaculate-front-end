import styled from 'styled-components'

export const Div = styled.body `
padding: 0;
margin: 0;
background: teal;
overflow: hidden;
.div {
margin-top: 8em;
height: 100vh;
background: teal;
width: 100vw;
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

form {
    width: 360px;
}

.avatar {
    width: 100px;
}

.pic {
    width: 70%;
}

form h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: #333;
}

.input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

.input-div.one {
    margin-bottom: 4px;
}

.i {
    display: flex;
    justify-content: center;
    align-items: center;
}

.i i {
    color: #d9d9d9;
    margin-top: 5px;
}

.input-div > div {
    position: relative;
    height: 45px;
}

.input-div.focus .i i{
    color: blue;
}

.input-div.focus div .h5 {
top: -5px;
font-size: 12px;
}

.input-div div h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 18px;
    transition: .3s;
    margin-top: 2em;

}

input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

a {
    display: block;
    text-align: right;
    text-decoration: none;
    color: #999;
    font-size: 0.9rem;
    transition: .3s;
    :hover {
        color: #252079;
    }
}

button {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 1.2rem;
    outline: none;
    border: none;
    background: linear-gradient(to right, #252079, #252052, #252079) ;
    color: white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    background-size: 200%;
    transition: .5s;

    :hover {
        background-position: right;
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
        justify-content: center;
        align-items: center;
        margin-left: 16em;
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
`
