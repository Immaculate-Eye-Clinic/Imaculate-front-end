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
    
}
`