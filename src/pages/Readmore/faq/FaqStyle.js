import styled from 'styled-components'

export const Div = styled.div`
margin: 100px 300px;

.services{
    h2{
        color: #252079;
        padding-bottom: 35px;
    }
    .service-button{
        width: 100%;
        display: flex;
        border: none;
        outline: none;
        font-size: 18px;
        font-weight: 700;
        padding: 10px;
        background: none;
        cursor: pointer;
        .space{
            flex: 1;
        }
        h3{
            color: #252079;
            padding: 0;
            margin: 0;
        }
    }
}
`