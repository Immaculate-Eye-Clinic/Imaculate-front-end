import styled from 'styled-components'

export const Wrapper = styled.div `
background: url(/Asset/Img/EyeCareBackground.jpg);
background-size: 100%;
position: relative;
color: white;
.diw {
width: 100%;

.div {
display: flex;
justify-content: space-evenly;
div {
    text-align: left;
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
        text-align: left;

        h1 {
            font-size: 20px;
        }

        p {
            font-size: 15px;
        }

        .spa {
            font-size: 30px;
        }
    }
}

@media (max-width: 760px) {
   .div1 {
       margin-right: 20em;
   } 
}

@media (max-width: 760px) {
   .div2 {
       margin-right: 16em;
       margin-top: 2em;

   } 
}

@media (max-width: 760px) {
 .div3 {
       margin-top: 2em;
       margin-right: 16em;
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


