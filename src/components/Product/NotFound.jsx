import { Heading } from "react-bulma-components";
import PropTypes from "prop-types";

const NotFound = ({ isbn }) => (
  <>
    <Heading>No encontramos ese producto...</Heading>
    <Heading subtitle>Comprueba que su ISBN ({isbn}) esté bien escrito</Heading>
  </>
);

NotFound.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default NotFound;
