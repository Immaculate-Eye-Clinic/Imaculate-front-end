import styled from 'styled-components'

export const Div = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.bgcolor};
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    z-index: 5;

    .logo {
        margin-left: 15px;
        margin-top: 15px;

        img {
            height: 80px;
        }

        @media (max-width: 650px){
          margin-left: 9px;
          margin-top: 9px;

          img{
            height: auto;
            width:  170px;
          }
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


        .submenu {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          background: #252079;
          margin-top: 120px;
          border-radius: 10px;
          padding: 0;
          ul{
            padding-right: 30px;

            .li{
              font-size: 14px;
              color: white;
              width: 200px;
              padding: 10px;
            }
          }
        }

        .service {
        
          .dropdown{
            position: absolute;
            transition: all 0.5s ease;
            margin-top: 1rem;
            top: 66%;
            background: #252079;
            padding-left: 30px;
            opacity: 0;
            visibility: hidden;
            
            
            a {
              clear: both;
              width: 200px;
              color: white;
              font-size: 14px;
              padding: 10px;
              text-align: left;

              :hover,
              :active 
              {
                color: white;
              }
            }
        }
        }
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
                line-height: 50px;
                padding: 0 25px;
                text-decoration: none;
                z-index: 1;
              }

              /* The Sign-up and Login Styles begins here */
              img{
                margin-left: 2em;
                margin-right: 4em;
                padding: 0;
              }
              
                .userStyle{
                  position: absolute;
                  top: 240px;
                  font-size: 15px;
                  color: white;
                  text-align: center;
                  background: transparent;
                  width: 250px;
                  border-radius: 3px;
                  opacity: 0;
                  visibility: hidden;
                }

                .userStyle_about{
                  right: 420px;
                  height: 220px;

                  .box{
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-top: 1.5em;
                    border-radius: 8px;
                  }
                }

                .userStyle_user{
                  right: 30px;
                  width: 150px;
                  height: 120px;

                  .box{
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-top: 1.5em;
                    border-radius: 8px;
                  }
                }

                .userStyle_services{
                  right: 315px;
                  height: 320px;

                  .box{
                    background-color: rgba(0, 0, 0, 0.3);
                    margin-top: 1.5em;
                    border-radius: 8px;
                  }
                }

                :hover .userStyle{
                  opacity: 1;
                  transition: 0.6s;
                  visibility: visible;
                  top: 4em;
                }

                .item {
                  transition: 0.5s;
                }

                .item_content{
                  font-size: 15px;
                }

                .item:hover {
                  background: rgba(25, 20, 80, 0.795);
                  border-radius: 3px;
                  transition: 0.5s;
                  padding-left: 15px;
                }
               
            }
        }
    }
    @media (max-width: 1099px) {
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
        margin: 1rem 1em;
           
          .userStyle{
                      position: relative;
                      text-align: center;
                      color: white;
                      display: flex;
                      justify-content: space-between;
                      align-content: center;
                      line-height:2em;
                      font-size: 18px;
                      width: 200px;
                      border-radius: 3px;
                      transition: 0.5s;
                      margin-left: 0px;
                    }

                    a{
                      color: white;
                    }

                    .login {
                      flex: 1;
                      padding: 2px 5px 2px;
                    }

                    .sign_up{
                      flex: 1;
                      padding: 2px 5px 2px;
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

  @media (min-width: 1100px) {
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