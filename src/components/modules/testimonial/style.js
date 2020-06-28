import styled, { css } from 'styled-components';

const width = '100%', height='550px';

export const Container = styled.div`
  border: none;
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
  margin: 60px 0;
  background-color: #252079;
  color: white;
`;
export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;