import { Container, Heading, Level, Section } from "react-bulma-components";
import Group from "./Product/Group.jsx";
import Products from "../components/Product/Products.js";

const ItemListContainer = () => {
  return (
    <Container>
      <Section>
        <Level>
          <Level.Item>
            <Heading size={1}>DC Cómics</Heading>
          </Level.Item>
        </Level>
        <Group items={Products[0].items} />
      </Section>
    </Container>
  );
};

export default ItemListContainer;
