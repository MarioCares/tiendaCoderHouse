import { Navbar } from "react-bulma-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DropdownItem = ({ name, subItems }) => {
  const navigate = useNavigate();

  return (
    <Navbar.Item href="#" hoverable>
      <Navbar.Link>{name}</Navbar.Link>
      <Navbar.Dropdown>
        {subItems.map((item, index) => (
          <Navbar.Item
            key={`${name}-${index}`}
            onClick={() => navigate(item.url)}
          >
            {item.name}
          </Navbar.Item>
        ))}
      </Navbar.Dropdown>
    </Navbar.Item>
  );
};

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
