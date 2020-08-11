import styled from 'styled-components'

export const Post = styled.div `
background: whitesmoke;
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
            width: 50%;
            position: relative;
            left: 24%;
            @media (max-width: 1010px) {
                width: 80%;
                left: 10%;
            }
            @media (max-width: 640px) {
                width: 100%;
                left: 0;
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