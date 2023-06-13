import { Navbar } from "react-bulma-components";
import PropTypes from "prop-types";

const DropdownItem = ({ name, subItems }) => (
  <Navbar.Item href="#" hoverable>
    <Navbar.Link>{name}</Navbar.Link>
    <Navbar.Dropdown>
      {subItems.map((item, index) => (
        <Navbar.Item key={`${name}-${index}`} href={item.url}>
          {item.name}
        </Navbar.Item>
      ))}
    </Navbar.Dropdown>
  </Navbar.Item>
);

DropdownItem.propTypes = {
  name: PropTypes.string,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default DropdownItem;
