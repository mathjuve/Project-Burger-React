import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import LogoHome from "../../assets/logo-home.svg";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Container, ContainerItens, Image, InputLabel, Input } from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const inputPrice = useRef();

  const history = useHistory();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        name: inputName.current.value,
        order: inputOrder.current.value,
        price: inputPrice.current.value,
      }
    );
    setOrders([...orders, newOrder]);
  }

  function consultOrder() {
    history.push("/orders");
  }

  return (
    <Container>
      <Image alt="logo-code-club-burguer" src={LogoHome} />

      <H1>Make your wish!</H1>

      <ContainerItens>
        <InputLabel>Order</InputLabel>
        <Input ref={inputOrder} placeholder="Enter the order" />

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Enter the name" />

        <InputLabel>Price</InputLabel>
        <Input ref={inputPrice} placeholder="$" />

        <Button onClick={addNewOrder}>Send</Button>
        <Button consult={true} onClick={consultOrder}>
          Consult Orders
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
