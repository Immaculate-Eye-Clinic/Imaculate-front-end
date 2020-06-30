import styled from 'styled-components'

export const Container = styled.div`

a {
  color: white;
}
  
.scroll {
  opacity: 0.5;
  background-color: #252079;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  border: none;
  
  &:hover {
    opacity: 1;
  }
}

.arrow-up {
  color: white;
  font-size: 30px;
  font-weight: bolder;
}
  

`