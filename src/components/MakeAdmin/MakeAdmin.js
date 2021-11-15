import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className='container my-5'>
        {/* {reviewSuccess && (
          <div class='alert alert-success' role='alert'>
            Your review has been placed successfully!
          </div>
        )} */}
        <h2 className='my-3 text-primary fw-bold'>Make Admin</h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            className='form-control my-3'
            placeholder='Email'
            {...register('email')}
          />
          <input
            className='btn btn-warning my-2 w-100'
            placeholder=''
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
