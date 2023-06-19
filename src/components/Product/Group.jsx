import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Columns,
  /* Content, */
  Heading,
  Image,
  Level,
  Media,
} from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Group = ({ items }) => {
  const [stock, setStock] = useState({});
  const [preCart, setPreCart] = useState({});

  useEffect(() => {
    setStock(
      items.reduce((record, item) => {
        record[item.ISBN] = item.stock;
        return record;
      }, {})
    );
    setPreCart(
      items.reduce((record, item) => {
        record[item.ISBN] = 1;
        return record;
      }, {})
    );
  }, [items]);

  const downItem = (isbn) => {
    if (preCart[isbn] > 1) {
      const { ...rest } = preCart;
      setPreCart({
        ...rest,
        [isbn]: parseInt(preCart[isbn]) - 1,
      });
    }
  };
  const upItem = (isbn) => {
    if (preCart[isbn] < stock[isbn]) {
      const { ...rest } = preCart;
      setPreCart({
        ...rest,
        [isbn]: parseInt(preCart[isbn]) + 1,
      });
    }
  };

  return (
    <Columns multiline>
      {items &&
        items.map((item) => (
          <Columns.Column size={4} key={item.ISBN}>
            <Card>
              <Card.Image src={item.src}></Card.Image>
              <Card.Content>
                <Media>
                  <Media.Item align="left">
                    <Image size={64} src={item.logo} />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4} marginless>
                      {item.name}
                    </Heading>
                    <Heading size={6} marginless>
                      Escritor: {item.writer}
                    </Heading>
                    <Heading size={6} marginless>
                      Dibujante: {item.penciler}
                    </Heading>
                  </Media.Item>
                </Media>
                {/* <Content dangerouslySetInnerHTML={{ __html: item.argument }} /> */}
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
                <hr />
                <Level>
                  <Level.Item>
                    <Button
                      color="success"
                      outlined
                      rounded
                      colorVariant="light"
                      onClick={() => {
                        downItem(item.ISBN);
                      }}
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </Button>
                  </Level.Item>
                  <Level.Item>
                    <Heading size={3}>{preCart[item.ISBN]}</Heading>
                  </Level.Item>
                  <Level.Item>
                    <Button
                      color="success"
                      outlined
                      rounded
                      colorVariant="light"
                      onClick={() => {
                        upItem(item.ISBN);
                      }}
                    >
                      <FontAwesomeIcon icon={faCaretUp} />
                    </Button>
                  </Level.Item>
                </Level>
                <Button color="info" colorVariant="light" fullwidth>
                  Agregar
                </Button>
              </Card.Content>
            </Card>
          </Columns.Column>
        ))}
    </Columns>
  );
};

Group.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      argument: PropTypes.string,
      ISBN: PropTypes.string,
      logo: PropTypes.string,
      name: PropTypes.string,
      penciler: PropTypes.string,
      src: PropTypes.string,
      stock: PropTypes.number,
      writer: PropTypes.string,
    })
  ).isRequired,
};

export default Group;
