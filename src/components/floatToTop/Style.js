import styled from 'styled-components'

export const Container = styled.div`

a {
  color: white;
}
  
.scroll {
  background-color: #24207977;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  border: none;
  z-index: 99;
  transition: 1s;
  outline: none;
  
  &:hover {
    transition: 0.5s;
    background-color: #252079;
  }
}

.display{
  display: block;
  transition: 0.5s;
  color: green;
}

.hide{
  display: hidden;
  transition: 0.5s;
  color: red;
}

`