import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 px-4 py-3 shadow my-5'>
            <h2 className='my-3'>Login</h2>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className='btn btn-primary w-100'
              >
                Submit
              </Button>
              <Link to='/register'>
                <p className='my-2'>New to observe ? Please Register</p>
              </Link>
            </Form>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
