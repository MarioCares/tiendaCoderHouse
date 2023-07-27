import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import {
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Section,
  Table,
} from "react-bulma-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total, removeItem, clearCart } = useContext(CartContext);

  const EmptyCart = () => (
    <>
      <Heading>Tu carrito de compra está vacío</Heading>
      <Heading subtitle>Sigue comprando!</Heading>
    </>
  );

  const TableRow = ({ product }) => {
    const subtotal = product.price * product.quantity;
    return (
      <tr key={product.isbn}>
        <td>
          {product.name}
          <Image src={product.img} style={{ width: 128 }} />
        </td>
        <td align="right">{product.price.toLocaleString("de-DE")}</td>
        <td align="right">{product.quantity.toLocaleString("de-DE")}</td>
        <td align="right">{subtotal.toLocaleString("de-DE")}</td>
        <td>
          <Button color="danger" onClick={() => removeItem(product.isbn)}>
            <span className="icon-text">
              <Icon align="left">
                <FontAwesomeIcon icon={faDeleteLeft} />
              </Icon>
              <span>Eliminar Producto</span>
            </span>
          </Button>
        </td>
      </tr>
    );
  };

  TableRow.propTypes = {
    product: PropTypes.shape({
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      isbn: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  };

  return (
    <Section>
      <Container>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <Heading>Ya quieres irte? Ok 🥲</Heading>
            <Heading subtitle>En tu carrito tienes:</Heading>
            <Table.Container>
              <Table bordered size="fullwidth">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Sub Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <TableRow key={product.isbn} product={product} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={3}>Total</th>
                    <th align="right">$ {total.toLocaleString("de-DE")}</th>
                    <th>
                      <Button color="danger" onClick={() => clearCart()}>
                        <span className="icon-text">
                          <Icon align="left">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Icon>
                          <span>Vaciar Carrito</span>
                        </span>
                      </Button>
                    </th>
                  </tr>
                </tfoot>
              </Table>
            </Table.Container>
            <hr />
            <Heading>¿Todo correcto?</Heading>
            <Button renderAs={Link} color="success" fullwidth to="/checkout">
              Realizar Pedido
            </Button>
          </>
        )}
      </Container>
    </Section>
  );
};

export default Cart;
