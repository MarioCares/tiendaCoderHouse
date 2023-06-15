import { Icon, Navbar, Tag } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CartWidget = ({ quantity }) => {
  return (
    <Navbar.Item>
      <span className="icon-text">
        <Icon align="left">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Icon>
        <Tag rounded color="danger">
          {quantity}
        </Tag>
      </span>
    </Navbar.Item>
  );
};

CartWidget.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default CartWidget;
