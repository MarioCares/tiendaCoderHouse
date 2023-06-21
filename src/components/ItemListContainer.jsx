import { Container, Heading, Level, Section } from "react-bulma-components";
import Group from "./Product/Group.jsx";
import { useEffect, useState } from "react";
import { ProductsServices } from "../services/ProductsService.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ProductsServices.getProductsByCategory("DC")
      .then((data) => {
        setItems(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Cargando</h1>;

  return (
    <Container>
      <Section>
        <Level>
          <Level.Item>
            <Heading size={1}>DC Cómics</Heading>
          </Level.Item>
        </Level>
        <Group items={items} />
      </Section>
    </Container>
  );
};

export default ItemListContainer;
