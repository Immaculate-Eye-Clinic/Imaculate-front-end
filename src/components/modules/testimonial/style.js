import styled, { css } from 'styled-components';

const width = '100%', height='620px';

export const Container = styled.div`
  border: none;
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
  margin: 60px 0;
  background-color: #252079;
  color: white;
  padding: 30px 0;
  @media (min-width: 800px){
    height: 480px;
  }
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

export const Testi = styled.div`
  width: 70%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  .image {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  .message {
    text-align: center;
    line-height: 25px;
    margin: 20px 0;
    font-size: 15px;
  }
  .name {
    font-size: 20px;
    float: right;
  }
`;