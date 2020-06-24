import styled from 'styled-components'

export const Div = styled.div `
button {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 30%;
    margin-left: 70%;
    height: 20px;
    width: 36px;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    :focus {
        outline: none;
    }
    .toggle-button_line {
        width: 18px;
        height: 1px;
        background: white;
    }
}
`