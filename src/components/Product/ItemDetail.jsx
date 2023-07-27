import {
  Button,
  Card,
  Content,
  Heading,
  Icon,
  Image,
  Level,
  Media,
} from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCircleInfo,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const ItemDetail = ({ item, isGrouped, upItem, downItem, quantity }) => {
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    addItem(
      {
        isbn: item.isbn,
        name: item.name,
        price: item.price,
        img: item.img,
      },
      quantity
    );
    setIsCartUpdated(true);
  };

  const GoToCart = () => (
    <Level>
      <Level.Item>
        <Button renderAs={Link} to="/cart" color="success">
          Terminar Compra
        </Button>
      </Level.Item>
    </Level>
  );

  const AddToCartButtons = () => (
    <>
      <Level>
        <Level.Item>
          <Button
            color="success"
            outlined
            rounded
            colorVariant="light"
            onClick={() => {
              downItem(item.isbn);
            }}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </Button>
        </Level.Item>
        <Level.Item>
          <Heading size={3}>{quantity}</Heading>
        </Level.Item>
        <Level.Item>
          <Button
            color="success"
            outlined
            rounded
            colorVariant="light"
            onClick={() => {
              upItem(item.isbn);
            }}
          >
            <FontAwesomeIcon icon={faCaretUp} />
          </Button>
        </Level.Item>
      </Level>
      <Level>
        {isGrouped && (
          <Level.Item>
            <Button
              color="warning"
              colorVariant="light"
              fullwidth
              onClick={() => isGrouped && navigate(`/item/${item.isbn}`)}
            >
              <span className={"icon-text"}>
                <span>Detalles</span>
                <Icon>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </Icon>
              </span>
            </Button>
          </Level.Item>
        )}
        <Level.Item>
          <Button
            color="info"
            colorVariant="light"
            fullwidth
            onClick={handleClick}
          >
            <span className={"icon-text"}>
              <span>Agregar</span>
              <Icon>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Icon>
            </span>
          </Button>
        </Level.Item>
      </Level>
    </>
  );

  return (
    <Card>
      <Card.Image src={item.img}></Card.Image>
      <Card.Content>
        <Media>
          <Media.Item align="left">
            <Image size={64} src={item.logo} />
          </Media.Item>
          <Media.Item>
            <Heading size={4} marginless>
              {item.name}
            </Heading>
          </Media.Item>
        </Media>
        {!isGrouped && (
          <>
            <Content dangerouslySetInnerHTML={{ __html: item.argument }} />
            <Level>
              <Level.Item textAlign={"center"}>
                <div>
                  <h1 className={"heading"}>Escritor</h1>
                  <Heading subtitle>{item.writer}</Heading>
                </div>
              </Level.Item>
              <Level.Item>
                <div>
                  <h1 className={"heading"}>Dibujante</h1>
                  <Heading subtitle>{item.penciller}</Heading>
                </div>
              </Level.Item>
            </Level>
            <hr />
          </>
        )}
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Heading size={4}>Stock</Heading>
            </Level.Item>
          </Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Heading size={4}>{item.stock}</Heading>
            </Level.Item>
          </Level.Side>
        </Level>
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Heading size={4}>Precio</Heading>
            </Level.Item>
          </Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Heading size={4}>
                $ {new Intl.NumberFormat("de-DE").format(item.price)}
              </Heading>
            </Level.Item>
          </Level.Side>
        </Level>
        <hr />
        {isCartUpdated ? <GoToCart /> : <AddToCartButtons />}
      </Card.Content>
    </Card>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    argument: PropTypes.string,
    img: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    penciller: PropTypes.string,
    price: PropTypes.number.isRequired,
    isbn: PropTypes.string.isRequired,
    writer: PropTypes.string,
  }).isRequired,
  isGrouped: PropTypes.bool.isRequired,
  upItem: PropTypes.func,
  downItem: PropTypes.func,
  quantity: PropTypes.number,
};

export default ItemDetail;
