import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link to='/home' className='nav-link'>
                <Nav.Link href='#home'>Home</Nav.Link>
              </Link>
              <Link to='/shop' className='nav-link'>
                <Nav.Link href='#home'>Shop</Nav.Link>
              </Link>
              <Link to='/orders' className='nav-link'>
                <Nav.Link href='#home'>Orders</Nav.Link>
              </Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <Link className='nav-link' to='/dashboard'>
                  <NavDropdown.Item href='#action/3.1'>
                    Dashboard
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
