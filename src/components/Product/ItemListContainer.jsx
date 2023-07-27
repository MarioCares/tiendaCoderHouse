import React, { useEffect } from "react";
import { Container, Heading, Level, Section } from "react-bulma-components";
import Group from "./Group.jsx";
import Loading from "../Loading.jsx";
import useProducts from "../../hooks/useProducts.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { getProducts, isLoading, products } = useProducts();
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

  if (isLoading) return <Loading />;

  return (
    <Section>
      <Container>
        {products ? (
          products.map((category) => (
            <React.Fragment key={category.id}>
              <Level className={"box"}>
                <Level.Item>
                  <Heading size={1}>{category.name}</Heading>
                </Level.Item>
              </Level>
              <Group items={category.products} />
            </React.Fragment>
          ))
        ) : (
          <>
            <Heading>
              En estos momentos no podemos cargar nuestros productos
            </Heading>
            <Heading subtitle>
              Por favor, inténtelo nuevamente en unos minutos.
            </Heading>
          </>
        )}
      </Container>
    </Section>
  );
};

export default ItemListContainer;
