import { Button, Form, Heading } from "react-bulma-components";
import PropTypes from "prop-types";

const CheckoutForm = ({ handleSubmit }) => {
  return (
    <>
      <Heading subtitle>
        Para completar tu orden, por favor completa los siguientes datos
      </Heading>
      <form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Label>Nombre</Form.Label>
          <Form.Control>
            <Form.Input name="name" required />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control>
            <Form.Input type="tel" name="phoneNumber" required />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input type="email" name="email" required />
          </Form.Control>
        </Form.Field>
        <Button type="submit" color="success" fullwidth>
          Crear Orden
        </Button>
      </form>
    </>
  );
};

CheckoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CheckoutForm;
