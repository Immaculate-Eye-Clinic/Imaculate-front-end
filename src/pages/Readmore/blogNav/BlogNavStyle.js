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
    /* position: fixed;
    top: 10px; */

    .toggle-button__line {
    width: 30px;
    height: 2px;
    background: #0000cd;
  }
  
  :focus {
    outline: none;
  }
`
export const Backdrop = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    top: 0;
    left: 0;
`
