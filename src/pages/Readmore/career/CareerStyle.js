import styled from 'styled-components'

export const Div = styled.div`

.textbody{
    margin: 100px 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1200px){
        margin: 50px 125px;
    }
    @media (max-width: 960px){
        margin: 50px;
    }
    @media (max-width: 800px){
        margin: 20px;
    }
    .first, .second{
        width: 45%;
        @media (max-width: 800px){
            width: 100%;
        }
    }
}
`