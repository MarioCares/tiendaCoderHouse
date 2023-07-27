import { useContext } from "react";
import { Timestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext.jsx";
import {
  Container,
  Heading,
  Notification,
  Section,
} from "react-bulma-components";
import CheckoutForm from "./CheckoutForm.jsx";
import useCreateOrder from "../../hooks/useCreateOrder.jsx";
import { Loading } from "../index.js";
import SimpleCart from "../../shared/SimpleCart.js";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const { createOrder, loading, orderId } = useCreateOrder();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, phoneNumber, email } = event.target.elements;
    createOrder({
      name: name.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      cart: SimpleCart(cart),
      total,
      date: Timestamp.fromDate(new Date()),
    });
  };

  if (loading) return <Loading />;

  return (
    <Section>
      <Container>
        <Heading>Checkout</Heading>
        {orderId ? (
          <>
            <Heading>Procesamos tu pedido!</Heading>
            <Heading subtitle>
              Para realizar un seguimiendo, utiliza el siguiente código
            </Heading>
            <Notification color="primary">
              <Heading>{orderId}</Heading>
            </Notification>
          </>
        ) : (
          <CheckoutForm handleSubmit={handleSubmit} />
        )}
      </Container>
    </Section>
  );
};

export default Checkout;
