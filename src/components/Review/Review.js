import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
  const { register, handleSubmit } = useForm();
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://guarded-sierra-78507.herokuapp.com/review', data)
      .then((res) => {
        if (res.insertedId) {
          return setReviewSuccess(true);
        }
        console.log(res);
      });
  };

  return (
    <div className='container my-5'>
      {reviewSuccess && (
        <div class='alert alert-success' role='alert'>
          Your review has been placed successfully!
        </div>
      )}
      <h2 className='my-3 text-primary fw-bold'>Please Give Us Review!</h2>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='form-control my-3'
          placeholder='Name'
          {...register('name')}
        />
        <textarea
          className='form-control my-3'
          placeholder='Comments'
          {...register('comments')}
        />
        <input
          className='form-control my-3'
          placeholder='Rating'
          type='number'
          {...register('rating')}
        />
        <input
          className='btn btn-warning my-2 w-100'
          placeholder=''
          type='submit'
        />
      </form>
    </div>
  );
};

export default Review;
