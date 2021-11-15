import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://guarded-sierra-78507.herokuapp.com/review', data)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <textarea {...register('comments')} />
        <input type='number' {...register('rating')} />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Review;
