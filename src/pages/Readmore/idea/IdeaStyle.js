import styled from 'styled-components'

export const Div = styled.div`
overflow: hidden;

.blogmessage{
    display: flex;
    flex-wrap: wrap;
    margin: 100px 250px;
    @media (max-width: 1200px){
        margin: 50px 150px;
    }
    @media (max-width: 950px){
        margin: 30px 100px;
    }
    @media (max-width: 770px){
        margin: 10px;
    }
    .first{
        display: flex;
        flex-wrap: wrap;
        width: 1200px;
        background: silver;
        padding: 15px;
        h3{
            font-size: 18px;
        }
    }
    .line{
        width: 100%;
        margin-top: 40px;
    }
    .second{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
            @media (max-width: 770px){
                display: block;
                margin: 0;
            }
        .div{
            width: 30%;
            @media (max-width: 770px){
                width: 100%;
            }
            p{
                font-size: 14px;
                margin-top: 30px;
            }
        }
        
    }
}
`