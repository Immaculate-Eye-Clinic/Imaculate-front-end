import styled from 'styled-components'

export const Div = styled.div`
margin: 2.5em;
align-items: center;


.card{
    display: grid;
    grid-template-columns: 250px;
    grid-template-rows: 150px 150px 50px;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;
    @media (max-width: 760px){
        display: grid;
        grid-template-columns: 200px;
        grid-template-rows: 110px 100px 40px;
    }

    :hover{
        box-shadow: 5px 5px 15px rgba(0,0,0,0.3), 5px 5px 15px rgba(0,0,0,0.3), 5px 5px 15px rgba(0,0,0,0.3);
    }
    
    
    .card-image{
        img{
            width: 100%;
            border-top-right-radius: 18px;
            border-top-left-radius: 18px;
            margin-right: 1em;
            
        }   
    }
    .card-text{
        margin: auto;
        .date{
            color: #252079;
            font-size: 13px;
            @media (max-width: 760px){
                font-size: 13px;
            }
        }
        p{
            color: grey;
            font-size: 13px;
            font-weight: 300;
            @media (max-width: 760px){
                font-size: 10px;
            }
        }
        h2{
            margin-top: 0;
            font-size: 27px;
            color: #252079;
            @media (max-width: 760px){
                font-size: 8px;
            }
        }
    }
    .button{
        width: 100%;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        
        button{
            border: none;
            color: white;
            background: #252079;
            padding: 10px 22px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 13px;
            border-radius: 10px;
            cursor: pointer;
            @media (max-width: 760px){
                font-size: 8px;
                padding: 8px 15px;
            }
        }
        
    }
}

`










{/*export const Div = styled.div`
color: blue;
border: 1px;
width: 25%;
border-radius: 1em;
box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.3);
margin: 2em;
padding: 0;
&:hover {
    box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.8), 0 8px 22px 0 rgba(0, 0, 0, 0.6);
}
img{
    width: 100%;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
}
p{
    text-align: center;
    font-size: 14px;
    margin: 0;
    padding-bottom: 1em;
    padding-top: 1em;
}

@media (max-width: 760px){
    width: 40%;
    margin: 1em;
}
@media (max-width: 1200px){
    width: 35%;
    margin: 1em;
}
`*/}