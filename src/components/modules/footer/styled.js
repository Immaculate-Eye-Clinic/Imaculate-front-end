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
margin-left: 6em;
div {
    text-align: left;
    width: 45%;
}
}

.div1 {

margin-top: 2em;
 }

 

 .div2 {
margin-top: 12.5em;


 }

.div3 {
margin-top: 12.5em;

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
        flex-direction: column;
        flex-wrap: wrap;
        text-align: left;
        margin left: 3em;

        h1 {
            font-size: 20px;
        }

        p {
            font-size: 15px;
        }

        img {
            width: 60%;
        }
    }
}

@media (max-width: 760px) {
   .div1 {
  
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
       text-align: left;
 }   
}

@media (max-width: 760px) {
  .add {
      margin-right: 12em;
  }  
}

@media (max-width: 760px) {
 .num {
    margin-right: 12em;
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

@media (max-width: 760px) {
   .pa {
       width: 13em;
   } 
}


`


