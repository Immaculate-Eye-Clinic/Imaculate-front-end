import styled from 'styled-components'

export const Div = styled.div`
width: 7%;
padding: 0;
div{
    img{
        margin-left: 1em;
        margin-top: 2em;
        width: 100%;
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
        height: 250px;
        background: #fff;
        display: flex;
        width: 800px%;
        margin: 30px;
    }

    .imgBx {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #333;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: 0.5s ease-in-out;
    }
}
`