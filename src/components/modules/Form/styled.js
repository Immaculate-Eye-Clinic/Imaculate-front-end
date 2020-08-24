import styled from 'styled-components'

export const Post = styled.div `
background: whitesmoke;
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
            width: 80%;
            padding: 23px 20px;
            margin-bottom: 28px;
            box-sizing: border-box;
            border-radius: 9px;
            border: 1px solid gray;
            text-align: center;
            font-size: 18px;
            color: black;
        }
        .but {
            margin: 19px 0;
            button {
            display: inline-block;
            padding: 0.55em 2.9em;
            margin: 0 0.3em 0.3em 0;
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
        border: 1px solid #ccc;
        border-radius: 4px;
        padding-top: -55px;
        width: 80%;
        height: 50px;
        outline: none;
        p {
            margin-top: 10px;
            color: black;
        }
    }
}
`