import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 342px;
  height: 354px;
  margin-top: 11px;
  margin-bottom: 25px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-left: 15px;

  color: #eeeeee;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding-left: 15px;
  margin-bottom: 40px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300px;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
`;



export const ButtonConsult = styled.button`
  width: 342px;
  height: 68px;
  border-radius: 14px;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;

  background: #754481;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.5;
  }
`;
