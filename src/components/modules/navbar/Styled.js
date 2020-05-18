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
        margin-left: 15px;
        margin-top: 9px;

        img {
            width: 300px;
            height: 90px;
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

              /* The Sign-up and Login Styles begins here */
              img{
                margin-left: 2em;
                margin-right: 2em;
                padding: 0;
              }

              .container_sign_up {
                text-align: left;
                margin: 0;
                padding: 0;
                height: 30px;


                .userStyle{
                  position: absolute;
                  top: 75px;
                  color: white;
                  text-align: center;
                  line-height: 2em;
                  display: block;
                  background: rgba(14, 16, 116, 0.033);
                  width: 100px;
                  border-radius: 3px;
                  transition: 0.5s;
                  opacity: 0;
                  visibility: hidden;
                }

                :hover .userStyle{
                  opacity: 1;
                  transition: 0.6s;
                  visibility: visible;
                }

                .login {
                  border-bottom: 1px solid gray;
                }

                .sign_up{
                  
                }

                .login:hover {
                  background: rgba(25, 20, 80, 0.795);
                  border-radius: 3px;
                  transition: 0.5s;
                }

                .sign_up:hover {
                  background: rgba(25, 20, 80, 0.795);
                  border-radius: 3px;
                  transition: 0.5s;
                }

              } /* The Sign-up and Login Styles ends here */

            }
        }
    }
    @media (max-width: 1100px) {
        .navs {
        display: none;
        }
    }
    @media (max-width: 1100px) {
        .toggle {
        display: block;
        position: absolute;
        top: 20px;
        margin-top: 10px;
        right: 40px;
        }
    }
    @media (min-width: 1100px) {
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
    background: #0000cd;
  }
  
  :focus {
    outline: none;
  }
`
export const Drawer = styled.div `
    .side-drawer {
    height: 100%;
    background: #252079;
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

        .link {
            color: white;
        }
    }

    .container_sign_up {
      position: absolute;
        display: flex;
        margin: 2rem 2.7em;

          img{
            margin-right: 1em;
          }            
          .userStyle{
                      position: relative;
                      color: white;
                      text-align: center;
                      display: flex;
                      line-height:2em;
                      width: 140px;
                      border-radius: 3px;
                      transition: 0.5s;
                      opacity: 0;
                      visibility: hidden;
                    }

                    :hover .userStyle{
                      opacity: 1;
                      transition: 0.6s;
                      visibility: visible;
                    }

                    .login {
                      width: fit-content;
                      padding: 2px 7px 2px;
                    }

                    .sign_up{
                      width: fit-content;
                      padding: 2px 7px 2px;
                    }

                    .login:hover {
                      background: rgba(25, 20, 80, 0.795);
                      border-radius: 3px;
                      transition: 0.5s;
                    }

                    .sign_up:hover {
                      background: rgba(25, 20, 80, 0.795);
                      border-radius: 3px;
                      transition: 0.5s;
                    }
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