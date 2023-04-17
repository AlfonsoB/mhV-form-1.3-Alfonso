import * as React from 'react';
import { Navbar, NavLink } from 'react-bootstrap';
import { AiOutlineFileSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './navBar.scss';
function NavBar(props) {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar className="nav-bar" bg="light" expand="true">
      <Navbar.Brand href="#">
        <img
          className="logo"
          src="https://github.com/AlfonsoB/react-form-contact-us-5-Alfonso/blob/main/images/MHV2.png?raw=true"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav-bar-collapsed">
        <NavLink
          onClick={() => handleButtonClick('/')}
          className="btn btn-outline-danger"
        >
          {props.contactButton}
        </NavLink>
        <NavLink
          onClick={() => handleButtonClick('/search')}
          className="btn btn-outline-primary mr-2"
        >
          {props.searchButton}
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
