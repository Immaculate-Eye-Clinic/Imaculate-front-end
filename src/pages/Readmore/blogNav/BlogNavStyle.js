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
            @media (max-width: 770px){
                display: none;
            }
            :hover{
                border-bottom: 5px solid white;
                
            }
        }
        .button{
            @media (min-width: 770px){
                display: none;
            }
        }
        .active{
            color: white;
            border-bottom: 5px solid white;
        }
    }
}
`

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 24px;
width: 30px;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
box-sizing: border-box;
:focus{
    outline: none;
}
.toggle-button{
    width: 30px;
    height: 3px;
    background: white;
}
`

export const Nav = styled.nav`
overflow: hidden;
height: 100%;
width: 100%;
background: #606060;
position: relative;
ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .li{
        text-decoration: none;
        color: white;
        :hover{
            color: #252079;
        }  
    }
    li{
        padding: 10px 0;
    }
}
`