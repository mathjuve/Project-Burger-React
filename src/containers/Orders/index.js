import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import LogoOrders from "../../assets/logo-orders.svg";
import Trash from "../../assets/trash.svg";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Container, ContainerItens, Paragraphs, Image, Orders } from "./styles";

const PageOrders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newOrder = orders.filter((order) => order.id !== orderId);
    setOrders(newOrder);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-orders" src={LogoOrders} />

      <H1>Orders</H1>

      <ul>
        {orders.map((order) => (
          <Orders key={order.id}>
            <Paragraphs>
              <p>{order.order}</p> <p><strong>{order.name}</strong></p>
            </Paragraphs>

            <button onClick={() => deleteOrder(order.id)}>
              <img src={Trash} alt="trash" />
            </button>
          </Orders>
        ))}
      </ul>

      <ContainerItens>
        <Button backPage={true} onClick={goBackPage}>
          Back
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default PageOrders;
