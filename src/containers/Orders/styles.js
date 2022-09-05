import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
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

export const Orders = styled.li`
  display: flex;
  justify-content: space-between;
  padding-left: 27px;
  padding-right: 17px;
  align-items: center;
  height: 101px;
  width: 342px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  margin-bottom: 16px;
  color: #ffffff;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  gap: 30px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Paragraphs = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
