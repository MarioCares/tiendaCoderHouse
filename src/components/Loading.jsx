import { Container, Heading, Hero } from "react-bulma-components";

const Loading = () => (
  <Hero color={"success"} size={"fullheight"}>
    <Hero.Body>
      <Container>
        <Heading>Cargando...</Heading>
      </Container>
    </Hero.Body>
  </Hero>
);

export default Loading;
