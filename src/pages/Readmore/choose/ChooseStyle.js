import styled from 'styled-components'

export const Div = styled.div`

.body{
    border: 10px solid black;
    margin: 100px 250px;
    .texts{
        border: 3px solid yellow;
        
            @media (max-width: 1200px){
                margin: 50px 200px;
            }
        .subtext{
            border: 3px solid black;
        width: 100%;
        display: grid;
        grid-template-columns: 60% 40%;
        justify-content: space-between;
        box-sizing: border-box;
            h1{

            }
            p{

            }
        }
    }
}

`