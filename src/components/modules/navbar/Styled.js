import styled from 'styled-components'

export const Div = styled.header`
    display: flex;
    justify-content: space-between;
    background: transparent;
`

export const Div2 = styled.div `
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

        .notif {
        width: 20px;
        height: 20px;
        cursor: pointer;
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
                color: #0000cd;
                text-decoration: none;
                font-weight: 500;
                font-size: 18px;
                font-style: normal;
                line-height: 20px;
                padding: 0 25px;
                text-decoration: none;
                z-index: 1;
    
                &.bold {
                font-weight: bold;
                }
            .active {
                border-bottom: 0.4em solid #0000cd;
            }
`
export const Div1 = styled.div `
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
            color: color: #00008b;
            font-weight: 500;
            font-size: 18px;
            font-style: normal;
        }
`
