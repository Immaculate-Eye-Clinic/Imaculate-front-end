import styled from 'styled-components'

export const Div = styled.div `
    text-align: center;
    background: white;
    height: auto;
    .tab-list {
        border-bottom: 1px solid #ccc;
        padding-left: 0;
        background: whitesmok
      }
      
      .tab-list-item {
        display: inline-block;
        list-style: none;
        margin-bottom: -1px;
        margin-right: 35px;
        margin-left: 35px;
        margin-top: 25px;
        padding: 0.5rem 0.75rem;
      }
      
      .tab-list-active {
        background-color: white;
        border: solid #ccc;
        border-width: 1px 1px 0 1px;
      }
`
export const Cont = styled.div `
text-align: left;
.con {
  position: relative;
  left: 8%;
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
}
`
