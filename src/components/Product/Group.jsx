import { useEffect, useState } from "react";
import { Columns } from "react-bulma-components";
import PropTypes from "prop-types";
import ItemDetail from "./ItemDetail.jsx";

const Group = ({ items }) => {
  const [stock, setStock] = useState({});
  const [preCart, setPreCart] = useState({});

  useEffect(() => {
    setStock(
      items.reduce((record, item) => {
        record[item.isbn] = item.stock;
        return record;
      }, {})
    );
    setPreCart(
      items.reduce((record, item) => {
        record[item.isbn] = 1;
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
          <Columns.Column size={4} key={item.isbn}>
            <ItemDetail
              item={item}
              quantity={preCart[item.isbn]}
              isGrouped
              downItem={downItem}
              upItem={upItem}
            />
          </Columns.Column>
        ))}
    </Columns>
  );
};

Group.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isbn: PropTypes.string,
      logo: PropTypes.string,
      name: PropTypes.string,
      src: PropTypes.string,
      quantity: PropTypes.number,
    })
  ).isRequired,
};

export default Group;
