import styled from 'styled-components'

export const Div = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    z-index: 5;

    .logo {
        margin-left: 3em;
        margin-top: 1em;

        h1 {
            color: #00008b;
            display: inline;
        }
        div {
            display: b;
        }
        span {
            color:  #00008b;
            font-weight: 500;
            font-size: 18px;
            font-style: normal;
        }
    }

    .navs {
        display: flex;
        justify-content: space-between;
        margin: 2em;
        padding-bottom: 2em;
        align-content: center;
    
    .menu {
        list-style-type: none;
        list-style-type: none;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        .active~span {
            position: absolute;
            width: 27px;
            border-bottom: 1.5px solid #0000cd;
            padding-bottom: 2rem;
            z-index: 0;
        }
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:hover {
            span:not(.hasContent) {
                position: absolute;
                width: 27px;
                border-bottom: 1.5px solid #0000cd;
                padding-bottom: 2rem;
                z-index: 0;
                }
            }
            a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                font-size: 18px;
                font-style: normal;
                line-height: 20px;
                padding: 0 25px;
                text-decoration: none;
                z-index: 1;
                }
            }
        }
    }
    @media (max-width: 760px) {
        .navs {
        display: none;
        }
    }
    @media (max-width: 760px) {
        .toggle {
        display: block;
        position: absolute;
        top: 20px;
        /* margin-top: 10px; */
        right: 40px;
        }
    }
    @media (min-width: 769px) {
        .toggle {
      display: none;
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
    background: #1890FF;
  }
  
  :focus {
    outline: none;
  }
`
export const Drawer = styled.div `
    .side-drawer {
    height: 100%;
    background: #001529;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;

    ul {
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    li {
        margin: 0.5rem 0;
    }
  }
  
  .side-drawer.open {
    transform: translateX(0);
  }
   
   
  .side-drawer a {
    text-decoration: none;
    font-size: 1.2rem;
  }
  .side-drawer a:hover,
  .side-drawer a:active
  .link 
  {
    color: #1890FF;
  }

  @media (min-width: 769px) {
    .side-drawer {
      display: none;
    }
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