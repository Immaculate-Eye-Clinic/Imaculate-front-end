import styled from 'styled-components'

export const Tabss = styled.div `
display: flex;
  padding: 24px;
  justify-content: center;
  border-bottom: 1px solid #48484859;
  .tab {
  padding: 12px;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  padding: 12px 36px;
  margin: 0 24px;
  font-size: 16px;
  letter-spacing: 0.5px;
  transition: all 0.5s ease;
  color: black;
  user-select: none;
  height: 20px;
    :hover {
  background-color: rgba(0, 43, 73, 0.17);
}
  }
  .selected-tab {
  background-color: #002b49;
  color: white;
}
`
export const App = styled.div `
.tab-content {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hi {
    width: 60%;
}
`