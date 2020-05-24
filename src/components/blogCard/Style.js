import styled from 'styled-components'

export const Div = styled.div`
margin: 2.5em;
align-items: stretch;
width: 250px;

@media (max-width: 760px){
    margin-left: 1.5em;
}


.card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;

    @media (max-width: 760px){
        display: flex;
        flex-wrap: wrap;
        width: 240px;
        height: 290px;
        
    }

    :hover{
        box-shadow: 5px 5px 15px rgba(0,0,0,0.3), 5px 5px 15px rgba(0,0,0,0.3), 5px 5px 15px rgba(0,0,0,0.3);
    }
    
    
    .card-image{
        img{
            width: 100%;
            border-top-right-radius: 18px;
            border-top-left-radius: 18px;
            
        }   
    }
    .card-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        margin: auto;
        height: 127px;

        @media (max-width: 760px){
            height: 70px;
        }

        .date{
            color: #252079;
            font-size: 13px;
            
            @media (max-width: 760px){
                flex: 1;
                font-size: 13px;
                height: 70px;
            }
        }
        p{
            color: grey;
            font-size: 13px;
            font-weight: 300;
            flex: 3;
            
            @media (max-width: 760px){
                flex: 15;
                font-size: 10px;
                white-space: pre-line;
                width: 240px;
                padding: 0;
                margin: 0;
            }
        }
        h2{
            margin-top: 0;
            font-size: 27px;
            color: #252079;
            flex: 1;
            
            @media (max-width: 760px){
                flex: 1;
                font-size: 8px;
            }
        }
    }
    .button{
        width: 100%;
        margin-bottom: 1.3em;
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