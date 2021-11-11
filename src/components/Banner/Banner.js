import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-md-6'>
            <div>
              <h5 className='text-white text-start'>EMPIRE COLLECTION</h5>
              <h1 className='text-white text-start'>
                The Watch Everyone Desires
              </h1>
              <p className='text-white text-start'>
                The best delegant watches from the luxury brand
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <img
              src='https://i.ibb.co/1L9Q8ZN/banner.jpg'
              alt=''
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
