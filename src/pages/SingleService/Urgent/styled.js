import styled from 'styled-components'

export const Div = styled.div `
.body {
    .head {
        margin-top: 6em;
        margin-left: 8em;
        p {
            font-style: italic;
            font-size: 20px;
        }

        h1 {
            font-weight: 900;
            font-size: 45px;
        }
    }
    .op {
        display: flex;
        font-size: 15px;
        margin-left: 8em;
        align-items: center;
            .text {
                width: 42%;
                    button {
                        border: none;
                        background: white;
                        :focus {
                            outline: none;
                        }
                        div {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 500px;
                            .h {
                                color: green;
                            }
                            .hi {
                                width: 100px;
                                font-size: 20px;
                                margin-left: -8px;
                            }
                        }
                    }
            }
            .image {
                margin-left: 3em;
                    img {
                        border-radius: 23em;
                    }
            }
    }
}
`