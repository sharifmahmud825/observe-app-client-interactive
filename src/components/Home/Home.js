import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('https://guarded-sierra-78507.herokuapp.com/watches')
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  console.log(watches);
  return (
    <div>
      <h2>this is shop</h2>
      <div className='container'>
        <div class='row row-cols-1 row-cols-md-4 g-4'>
          {watches.slice(0, 6).map((watch) => (
            <div class='col'>
              <div class='card'>
                <img src={watch.image} class='card-img-top' alt='...' />
                <div class='card-body'>
                  <h5 class='card-title'>{watch.name}</h5>
                  <p class='card-text'>$ {watch.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
