import styled from 'styled-components'

export const Div = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgba(14, 14, 17, 0.342);
    position: fixed;
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
            a {
                color: #0000cd;
            }
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
                font-weight: 600;
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
`