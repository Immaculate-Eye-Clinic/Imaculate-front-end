import styled from 'styled-components'

export const Div = styled.div`

nav{
    background: #252079;
    height: 65px;
    padding-top: 1px;
    ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        .li{
            color: white;
            text-decoration: none;
            font-size: 15px;
            padding-bottom: 25px;
            :hover{
                border-bottom: 5px solid white;
                
            }
        }
        .active{
            color: white;
            border-bottom: 5px solid white;
        }
    }
}
`