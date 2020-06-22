import styled from 'styled-components'

export const Div = styled.div `
.body {
    .head {
        margin-top: 6em;
        margin-left: 8em;
            @media (max-width: 1250px) {
                margin-left: 1em;
            }
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
        text-align: left;
            @media (max-width: 1250px) {
                margin-left: 1em;
            }
            @media (max-width: 850px) {
                flex-wrap: wrap;
                text-align: center;
            }
            .text {
                width: 42%;
                text-align: left;
                @media (max-width: 850px) {
                width: 100%;
                }
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
                            @media (max-width: 1150px) {
                                width: 450px;
                            }
                            @media (max-width: 1000px) {
                                width: 350px;
                            }
                            @media (max-width: 850px) {
                                width: 800px;
                            }
                            @media (max-width: 830px) {
                                width: 750px;
                            }
                            @media (max-width: 775px) {
                                width: 700px;
                            }
                            @media (max-width: 720px) {
                                width: 650px;
                            }
                            @media (max-width: 675px) {
                                width: 600px;
                            }
                            @media (max-width: 623px) {
                                width: 550px;
                            }
                            @media (max-width: 600px) {
                                width: 500px;
                            }
                            @media (max-width: 575px) {
                                width: 450px;
                            }
                            @media (max-width: 550px) {
                                width: 400px;
                            }
                            @media (max-width: 525px) {
                                width: 350px;
                            }
                            .h {
                                color: #252079;
                            }
                            .hi {
                            
                                font-size: 17px;
                                margin-left: -8px;
                            }
                        }
                    }
            }
            .image {
                margin-left: 3em;
                width: 100%;
                @media (max-width: 1050px) {
                    margin-left: 5em;
                }
                @media (max-width: 1000px) {
                    
                }
                    img {
                        border-radius: 23em;
                        @media (max-width: 1000px) {
                            width: 90%;
                        }
                    }
            }
    }
}
`