import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='https://i.ibb.co/42PdzCY/logo.png'
              alt='logo'
              className='img-fluid w-25'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Nav className='ms-auto'>
              <Link to='/home' className='nav-link'>
                <Nav.Link href='#home'>Home</Nav.Link>
              </Link>
              <Link to='/shop' className='nav-link'>
                <Nav.Link href='#shop'>Shop</Nav.Link>
              </Link>
              <Link to='/orders' className='nav-link'>
                <Nav.Link href='#orders'>Orders</Nav.Link>
              </Link>

              {user.email ? (
                <div className='d-flex'>
                  <Link to='/dashboard' className='nav-link'>
                    <NavDropdown title='Dashboard' id='basic-nav-dropdown'>
                      <Link to='/myOrders' className='nav-link text-black'>
                        <Nav.Link href='#myOrders'>My Orders</Nav.Link>
                      </Link>
                      <Link to='/review' className='nav-link text-black'>
                        <Nav.Link href='#review'>Review</Nav.Link>
                      </Link>
                      <Link to='/payment' className='nav-link text-black'>
                        <Nav.Link href='#payment'>Payment</Nav.Link>
                      </Link>
                    </NavDropdown>
                  </Link>

                  <Link to='/admin' className='nav-link'>
                    <NavDropdown title='Admin' id='basic-nav-dropdown'>
                      <Link to='/manageOrders' className='nav-link text-black'>
                        <Nav.Link href='#manageOrders'>Manage Orders</Nav.Link>
                      </Link>
                      <Link to='/makeAdmin' className='nav-link text-black'>
                        <Nav.Link href='#review'>Make Admin</Nav.Link>
                      </Link>
                    </NavDropdown>
                  </Link>
                  <Navbar.Text className='nav-link'>
                    <a href='#login'>{user.email}</a>
                  </Navbar.Text>

                  <Button onClick={logOut} className='btn btn-danger ms-4'>
                    Log Out
                  </Button>
                </div>
              ) : (
                <Link to='/login' className='nav-link'>
                  <Nav.Link href='#login'>Login</Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
