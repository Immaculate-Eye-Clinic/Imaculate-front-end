import styled from 'styled-components'

export const Div = styled.div `
width: 70%;
border: 2px solid black;
text-align: center;
    .tab-list {
        border-bottom: 1px solid #ccc;
        padding-left: 0;
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
        border-width: 1px 1px 0 1px;
      }
`