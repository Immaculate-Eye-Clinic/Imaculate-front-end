import styled from 'styled-components'

export const Div = styled.div`
width: 7%;
padding: 0;
margin-right: 9em;
div{
    img{
       
        width: 50%;
    }
    p{
        width: 120px;
        text-align: center;
        font-size: 12px;
        margin: 0;
        padding-bottom: 1em;
    }
}

@media (max-width: 760px){
    width: 70px;
    margin: 1em;
    div{
        p{
            font-size: 12px;
        }
        img{
            margin-left: 1.8em;
        } 
        
    }
}

.container {
    position: relative;
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin: 20px;

    .card {
        position: relative;
        height: 160px;
        background:  #252079;
        display: flex;
        width: 800px;
        margin: 30px;
        :hover {
            width: 30px;
            height: 30px;
            left: -3px;
            top: calc(100% - 75px);
            transition: 0.3s ease-in-out;
            background: whitesmoke;
        }
    }

    .imgBx {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #252079;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: 0.5s ease-in-out;
        img {
            max-width: 100%;
            transition: 0.5s ease-in-out;
        }
   
    }
    .design {
        background: whitesmoke;
        padding-top: 1em;
    }

    .card:hover imgBx img {

    }

   
}
@media (max-width: 992px) {
        .container{
            margin: 0;
        }
        img {
            margin-right: 2em;
        }
    
}
`

export const Body = styled.body `
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;

 .container {
position: relative;
width: 300px;
justify-content: space-between;
flex-wrap: wrap;
margin: 20px ;
 }

 .container .card {
     position: relative;
     height: 150px;
     background: whitesmoke;
     display: flex;
     width: 45%;
     margin: 30px 15px;
     margin-left: 16em;
 }

 .container .card .imgBx {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: #252079;
     z-index: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     overflow: hidden;
     transition: 0.5s ease-in-out;
 }

 .container .card:hover .imgBx
 {
     width: 45px;
     height: 45px;
     left: -37.5px;
     top: calc(50% - 25px);
     transition: 0.5s ease-in-out;
     background: #ff0057;
 } 



 .container .card .imgBx img
 {
     max-width: 50%;
     transition: 0.5s ease-in-out;
 }

 .container .card:hover .imgBx img
 {
     max-width: 45%;
 }

 .container .card .content
 {
     position: absolute;
     right: 0;
     width: calc(100% - 25px);
     height: 100%;
     padding: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .container .card .content h3 
 {
     margin-bottom: 1px;
     font-size: 24px;
 }

 .container .card .content .p2 
 {
     text-align: center;
     margin-right: 12px;
     font-size: 12px;
 }

 @media (max-width: 992px) {
     .container {
         width: 250px;
         display: flex;
         flex-direction: row;
         align-items: center;
         margin: -9em;
         margin-bottom: 1em;
     }
     .container .card {
         display: flex;
         justify-content: center;
         width: 30%;
         margin: 1px ;
         margin-left: 1px;
         margin-right: 0;
     }
 }

 @media (max-width: 760px) {
     .container {
        margin-right: 3em; 
     }
     .container .card {
         max-width: 30%;
        flex-direction: column;
        height: auto;
        margin-right: 3em; 
     }
     .container .card .imgBx {
         position: relative;
     }

     .container .card .imgBx,
     .container .card:hover .imgBx
      {
         left: 0;
         width: 100%;
         height: 40px;
         
     }

     .container .card .imgBx img,
     .container .card:hover .imgBx img 
     {
         max-width: 25px;
     }
     
     .container .card .content
     {
         position: relative;
         width: 100%;
         height: 100%;
     }

     .container .content h3,
     .container .content .p
     {
         display: none;
     }
     .container .content .p2 {
         background: whitesmoke;
         color: black;
     }
 }
`