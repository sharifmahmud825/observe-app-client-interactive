import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Orders = () => {
  const { id } = useParams();
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('https://guarded-sierra-78507.herokuapp.com/watches')
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
      });
  }, []);
  // console.log(watches);

  const matchedData = watches.find((watch) => watch?._id == id);
  // console.log(matchedData);

  const { _id, name, description, image, price } = matchedData || {};
  const [bookingInfo, setBookingInfo] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    console.log(newBookingInfo);
    setBookingInfo(newBookingInfo);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const placeOrder = {
      ...bookingInfo,
      serviceName: name,
      price: price,
    };

    // send data to the server
    fetch('https://guarded-sierra-78507.herokuapp.com/watches', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(placeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card mb-3'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    src={image}
                    className='img-fluid rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title text-start text-danger'>
                      {name}
                    </h5>
                    <hr />
                    <p className='card-text text-start'>{description}</p>
                    <h5 className='card-title text-start fw-bold'>$ {price}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 shadow p-4 bg-light mb-3'>
            <h2 className='fw-bold my-3'>Place Order</h2>
            <Form onSubmit={handleBookingSubmit}>
              <Form.Group className='mb-3'>
                <Form.Control
                  onBlur={handleOnBlur}
                  type='text'
                  name='name'
                  placeholder='Enter Your Name'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  onBlur={handleOnBlur}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  onBlur={handleOnBlur}
                  type='text'
                  name='address'
                  placeholder='Enter Your Address'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  onBlur={handleOnBlur}
                  type='number'
                  name='phone'
                  placeholder='Enter Your Phone Number'
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='w-100'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
