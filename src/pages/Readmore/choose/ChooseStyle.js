import styled from 'styled-components'

export const Div = styled.div`

.body{
    display: flex;
    flex-wrap: wrap;
    .texts{
        margin: 100px 250px;
        @media (max-width: 1250px){
            margin: 80px 200px;
        }
        @media (max-width: 1075px){
            margin: 60px 150px;
        }
        @media (max-width: 965px){
            margin: 40px 80px;
        }
        @media (max-width: 800px){
            margin: 20px;
        }
        .subtext{
        width: 100%;
        display: grid;
        grid-template-columns: 60% 40%;
        justify-content: space-between;
        box-sizing: border-box;
        @media (max-width: 800px){
            display: block;
        }
            h1{
                font-size: 25px;
            }
            p{

            }
        }
    }
}

`