import styled from 'styled-components'

export const Div = styled.div`
width: 24.5%;
margin: 3em;
align-items: center;


.card{
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 180px 180px 60px;
    border-radius: 18px;
    background: white;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    }
    
    
    .card-image{
        img{
            width: 96.5%;
            border-top-right-radius: 18px;
            border-top-left-radius: 18px;
            margin-right: 1em;
        }   
    }
    .card-text{
        margin: 25px;
        .date{
            color: rgb(255, 7, 110);
            font-size: 13px;
        }
        p{
            color: grey;
            font-size: 15px;
            font weight: 300;
        }
        h2{
            margin-top: 0;
            font-size: 28px;
        }
    }
    .card-stats{
        width: 96.5%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: rgb(255, 7, 110);
        .stat{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 10px;
            color: white;
        }
        .type{
            font-size: 11px;
            font-weight: 300;
            text-transform: uppercase;
        }
        .value{
            font-size: 22px;
            font-weight: 500;
        }
        .border{
            border-left: 1px solid rgb(172,26,87);
            border-right: 1px solid rgb(172,26,87);
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