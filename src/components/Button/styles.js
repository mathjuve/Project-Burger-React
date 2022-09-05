import styled from 'styled-components'

export const Button = styled.button`
  width: 342px;
  height: 68px;
  border-radius: 14px;
  margin-bottom: 10px;
  margin-top: ${props => props.backPage && '85px'};

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;

  background: ${props => props.consult ? '#754481' : '#ea2a2a'};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.5;
  }
`;