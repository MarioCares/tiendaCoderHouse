import { useRouteError } from "react-router-dom";
import { Container } from "react-bulma-components";

const ErrorPage = () => {
  const error = useRouteError();
  console.error("Error en página!!!", error);

  return (
    <Container className={"content"}>
      <h1>Oh no!</h1>
      <p>Nos fuimos a la B...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
};

export default ErrorPage;
