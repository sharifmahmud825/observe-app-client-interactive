import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='container p-3'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src='https://i.ibb.co/Vm70mzz/logo-2.png'
              alt='logo'
              className='img-fluid'
            />
            <p className='text-white'>
              Explore the Watch collection of prestigious, high-precision
              timepieces. We offers a wide assortment of Oyster Perpetual and
              Cellini watches to suit any wrist. Discover the broad selection of
              elegant watches to find a perfect combination of style and
              functionality.
            </p>
          </div>
          <div className='col-md-4'>
            <h4 className='text-white'>Explore</h4>

            <Link to='/home' className='nav-link text-white'>
              <Nav.Link href='#home'>Home</Nav.Link>
            </Link>
            <Link to='/shop' className='nav-link text-white'>
              <Nav.Link href='#home'>Shop</Nav.Link>
            </Link>
            <Link to='/orders' className='nav-link text-white'>
              <Nav.Link href='#home'>Orders</Nav.Link>
            </Link>
          </div>
          <div className='col-md-4'>
            <h4 className='text-white'>Follow Us</h4>
            <span>
              <i class='fab fa-facebook text-white fs-3 mt-3 '></i>
              <i class='fab fa-instagram text-white fs-3 mt-3 ms-3'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
