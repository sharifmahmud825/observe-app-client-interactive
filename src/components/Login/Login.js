import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../context/useAuth';

const Login = () => {
  const { loginUser, setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();
  const uri = location.state?.from || '/home';

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.push(uri);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLoginEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleLoginPassword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 px-4 py-3 shadow my-5'>
            <h2 className='my-3'>Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  onBlur={handleLoginEmail}
                  type='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  onBlur={handleLoginPassword}
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
