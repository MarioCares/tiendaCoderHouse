import { Columns, Container, Section } from "react-bulma-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useItem from "../../hooks/useItem.jsx";
import Loading from "../Loading.jsx";
import ItemDetail from "./ItemDetail.jsx";
import NotFound from "./NotFound.jsx";

const ItemDetailContainer = () => {
  const [quantity, setQuantity] = useState(1);
  const { getProduct, isLoading, product } = useItem();
  const { isbn } = useParams();

  const upItem = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const downItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    getProduct(isbn);
  }, [isbn]);

  if (isLoading) return <Loading />;

  return (
    <Section>
      <Container>
        <Columns>
          <Columns.Column size={5} offset={3}>
            {product ? (
              <ItemDetail
                item={product}
                isGrouped={false}
                downItem={downItem}
                upItem={upItem}
                quantity={quantity}
              />
            ) : (
              <NotFound isbn={isbn} />
            )}
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  );
};
export default ItemDetailContainer;
