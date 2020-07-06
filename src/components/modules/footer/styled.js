import styled from 'styled-components'

export const Wrapper = styled.div `
background: url(/Asset/Img/EyeCareBackground.jpg);
background-size: 100%;
position: relative;
color: white;

.diw {
background: #252079;
width: 100%;
background-size: 100%;
opacity: 0.8;
}

.container {
display: flex;
justify-content: space-evenly;
margin-left: 6em;
margin-right: 6em;

div {
    text-align: center;
    width: 100%;
}

img{
    position: absolute;
    height: 80px;
    top: 2em;
    left: 2em;
}
}

.div1 {
    margin-top: 10.5em;

    .add{
    }
 }

 

 .div2 {
margin-top: 10.5em;
 }

.div3 {
margin-top: 10.5em;

}

.dim {
div {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 30%;

    .a{
        flex: 1;
        text-align: right;
        margin-right: 1em;
    }

    hr{
        border: none;
        background-color: #FFFFFF80;
        width: 2px;
        border-radius: 5px;
    }

    .b{
        flex: 1;
        text-align: left;
        margin-left: 1em;
    }
}
}

@media (max-width: 760px) {
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        text-align: center;
        margin-left: 0;
        margin-right: 0;

        h1 {
            font-size: 20px;
        }

        p {
            font-size: 15px;
        }
    }
}

@media (max-width: 760px) {
   .div1 {
        .add{
            margin: auto;
            width: 80%;
        }
   } 
}

@media (max-width: 760px) {
   .div2 {
       margin-top: 2em;
   } 
}

@media (max-width: 760px) {
 .div3 {
       margin-top: 2em;
 }   
}

@media (max-width: 760px){
    .dim {
        div {
            width: 70%;
        }
    }
}
`


