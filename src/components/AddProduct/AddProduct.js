import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [addProductSuccess, setaddProductSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://guarded-sierra-78507.herokuapp.com/addProduct', data)
      .then((res) => {
        if (res.insertedId) {
          return setaddProductSuccess(true);
        }
        console.log(res);
      });
  };
  return (
    <div className='container my-5'>
      {addProductSuccess && (
        <div class='alert alert-success' role='alert'>
          Your review has been placed successfully!
        </div>
      )}
      <h2> Add product</h2>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='form-control my-3'
          placeholder='Service Name'
          {...register('serviceName')}
        />
        <input
          className='form-control my-3'
          placeholder='Details'
          {...register('description')}
        />
        <input
          className='form-control my-3'
          placeholder='Image Url'
          {...register('image')}
        />
        <input
          className='form-control my-3'
          placeholder='Price'
          type='number'
          {...register('price')}
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

export default AddProduct;
