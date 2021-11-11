import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 px-4 py-3 shadow my-5'>
            <h2 className='my-3'>Register</h2>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Control type='text' placeholder='Enter Name' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className='btn btn-primary w-100'
              >
                Submit
              </Button>
              <Link to='/login'>
                <p className='my-2'>Already Registered ? Please Login</p>
              </Link>
            </Form>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
