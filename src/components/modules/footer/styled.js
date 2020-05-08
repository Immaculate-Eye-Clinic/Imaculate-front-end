import styled from 'styled-components'

export const Wrapper = styled.div `
background: url(/Asset/Img/EyeCareBackground.jpg);
background-size: 100%;
position: relative;
color: white;

.diw {
background: #9370db;
opacity: 0.8;
}

.div {
display: flex;
justify-content: space-evenly;
div {
    text-align: center;
    width: 45%;
}
}

.div1 {
margin-left: 4em;
margin-top: 2em;
.name {
    color: #00008b;
    span {
            color:  #00008b;
            font-weight: 500;
            font-size: 18px;
            font-style: normal;
        }
        h1 {
            display: inline;
        }
}
 }

 

 .div2 {
margin-top: 9em;
margin-right: 3.1em;

 }

.div3 {
margin-top: 9em;
}

.dim {
div {
    display: flex;
    justify-content: space-evenly;
    .a {
        margin-left: 30em;
    }
    .b {
        margin-right: 30em;
    }
}
}

@media (max-width: 760px) {
    .div {
        display: flex;
        flex-wrap: wrap;
    }
}

@media (max-width: 760px) {
   .div2 {
       margin-right: 2em;
       margin-top: 2em;

   } 
}

@media (max-width: 760px) {
 .div3 {
       margin-top: 2em;
 }   
}

@media (max-width: 760px) {
  .add {
      margin-left: 1.5em;
  }  
}

@media (max-width: 760px) {
 .num {
    margin-left: 1.5em;
    text-align: center;
   }
}

@media (max-width: 760px) {
 .a  {
     margin-right: 2em;
 }   
}

@media (max-width: 760px) {
  .b {
      margin-left: 2em;
  }  
}
`


