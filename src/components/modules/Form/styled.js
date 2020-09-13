import styled from 'styled-components'

export const Post = styled.div `
overflow: hidden;
.main {
    width: 80%;
    text-align: center;
    position: relative;
    left: 10%;
    top: 3em;
    background: white;
    .head {
            padding: 10px 0;
            h1 {
                color: #252079;
            }
        }
    .blog {
        .drop {
            position: relative;
            left: 34%;
            @media (max-width: 1010px) {
                
            }
            @media (max-width: 640px) {
        
            }
        }
        input {
            border: 1px solid black;
            border-radius: 6px;
            padding-top: -55px;
            width: 80%;
            height: 40px;
            outline: none;
            text-align: left;
            margin-bottom: 25px;
            font-size: 16px;
        }
        .but {
            margin-top: 19px;
            margin-bottom: 88px;
            button {
            display: inline-block;
            padding: 0.55em 2.9em;
            margin: 0 0.3em 0.3em 2em;
            border: 0.1em solid #ffffff;
            border-radius: 0.12em;
            box-sizing: border-box;
            text-decoration: none;
            font-weight: 300;
            background: #252079;
            color: white;
            }
        }
        
    }
}

`

export const Div = styled.div`
width: 100%;
position: relative;
right: 24%;

.container {
    width: 100%;
    .dropzone {
        border: 1px solid black;
        border-radius: 6px;
        padding-top: -55px;
        width: 80%;
        height: 40px;
        outline: none;
        text-align: left;
        p {
            margin-top: 7px;
            color: black;
            font-size: 16px;
        }
    }
}
`