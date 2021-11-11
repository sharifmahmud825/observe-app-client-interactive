import React, { useEffect, useState } from 'react';
import Watch from './Watch/Watch';

const Shop = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('https://guarded-sierra-78507.herokuapp.com/watches')
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  console.log(watches);
  return (
    <div>
      <h2 className='fw-bold my-4'>SHOP</h2>
      <hr />
      <div className='container'>
        <div class='row row-cols-1 row-cols-md-4 g-4'>
          {watches.map((watch) => (
            <Watch watch={watch}></Watch>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
