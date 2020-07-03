import styled from 'styled-components'

export const Container = styled.div`

a {
  color: white;
}
  
.scroll_hidden {
  display: none;
  transition: 5s;
}

.scroll_shown {
  opacity: 0.5;
  background-color: #252079;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  border: none;
  z-index: 99;
  display: block;
  transition: 3s;
  
  &:hover {
    opacity: 1;
    transition: 0.5s;
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

.arrow-up {
  color: white;
  font-size: 30px;
  font-weight: bolder;
}
  

`