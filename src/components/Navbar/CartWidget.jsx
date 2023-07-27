import { Icon, Navbar, Tag } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Navbar.Item renderAs={Link} to="/cart">
      <span className="icon-text">
        <Icon align="left">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Icon>
        <Tag rounded color="danger">
          {cart.length}
        </Tag>
      </span>
    </Navbar.Item>
  );
};

export default CartWidget;
