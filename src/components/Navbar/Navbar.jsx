import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Container, Form, Icon, Navbar } from "react-bulma-components";
import DropdownItem from "./DropdownItem.jsx";
import CartWidget from "./CartWidget.jsx";
import { useNavigate } from "react-router-dom";

const NavbarComponent = ({ menu }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar active={isActive}>
      <Container>
        <Navbar.Brand onClick={() => setIsActive(!isActive)}>
          <Navbar.Item
            onClick={() => navigate("/")}
            className="is-size-5 has-text-weight-semibold"
          >
            <img src={menu.brand.img} alt={menu.brand.name} /> {menu.brand.name}
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container align="right" textSize={5} textWeight={"bold"}>
            <Navbar.Item>
              <Form.Control>
                <Form.Input placeholder="Búsqueda" className="is-rounded" />
                <Icon align="left">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Icon>
              </Form.Control>
            </Navbar.Item>
            {menu.items &&
              menu.items.map((item, index) =>
                item.subitems ? (
                  <DropdownItem
                    key={`${item}-${index}`}
                    name={item.name}
                    subItems={item.subitems}
                  />
                ) : (
                  <Navbar.Item
                    key={item.name}
                    onClick={() => navigate(item.url)}
                  >
                    {item.name}
                  </Navbar.Item>
                )
              )}
            <CartWidget />
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  menu: PropTypes.shape({
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        subitems: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
          })
        ),
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default NavbarComponent;
