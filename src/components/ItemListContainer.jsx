import { Container, Heading, Level, Section } from "react-bulma-components";
import Group from "./Product/Group.jsx";
import Loading from "./Loading.jsx";
import usePrincipal from "../hooks/usePrincipal.jsx";

const ItemListContainer = () => {
  const { isLoading, principal } = usePrincipal();

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Section>
        {principal &&
          principal.categories.map((category) => (
            <>
              <Level key={category.id} className={"box"}>
                <Level.Item>
                  <Heading size={1}>{category.name}</Heading>
                </Level.Item>
              </Level>
              <Group items={category.featured} />
            </>
          ))}
      </Section>
    </Container>
  );
};

export default ItemListContainer;
