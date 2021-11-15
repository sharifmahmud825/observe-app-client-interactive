import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../context/useAuth';

const Register = () => {
  const { registerUser, setUser, setIsLoading, updateUser, isLoading } =
    useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();
  const uri = location.state?.from || '/home';

  const handleRegisterName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleRegisterEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleRegisterPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    registerUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        updateUser(name);
        history.replace(uri);
      })
      .catch((error) => {
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className='container'>
        {isLoading && <Spinner className='text-center' animation='grow' />}
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 px-4 py-3 shadow my-5'>
            <h2 className='my-3'>Register</h2>
            {!isLoading && (
              <Form onSubmit={handleRegister}>
                <Form.Group className='mb-3'>
                  <Form.Control
                    onBlur={handleRegisterName}
                    type='text'
                    placeholder='Enter Name'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control
                    onBlur={handleRegisterEmail}
                    type='email'
                    placeholder='Enter email'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control
                    onBlur={handleRegisterPassword}
                    type='password'
                    placeholder='Password'
                  />
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
            )}
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
