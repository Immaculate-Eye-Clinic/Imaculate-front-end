import styled from 'styled-components'

export const Div = styled.div `
    text-align: center;
    background: white;
    height: 45vh;
    .tab-list {
        border-bottom: 1px solid #ccc;
        padding-left: 0;
        margin-top: 20px;
      }
      
      .tab-list-item {
        display: inline-block;
        list-style: none;
        margin-bottom: -1px;
        margin-right: 35px;
        margin-left: 35px;
        padding: 0.5rem 0.75rem;
      }
      
      .tab-list-active {
        background-color: white;
        border: solid #ccc;
        border-width: 1px 1px 1px 1px;
      }
`
