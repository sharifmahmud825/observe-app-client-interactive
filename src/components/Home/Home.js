import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Shop from '../Shop/Shop';

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  // get review
  useEffect(() => {
    fetch('http://localhost:5000/allReviews')
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  // get data
  useEffect(() => {
    fetch('https://guarded-sierra-78507.herokuapp.com/watches')
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <h2 className='my-4 fw-bold'> SHOP</h2>
      <hr />
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {watches.slice(0, 6).map((watch) => (
            <div className='col'>
              <div className='card'>
                <img src={watch.image} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{watch.name}</h5>
                  <h5 className='card-text fw-bold'>$ {watch.price}</h5>
                  <Link to={`/orders/${watch._id}`}>
                    <button className='btn btn-warning'>
                      <i className='fas fa-shopping-cart me-2'></i>Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>This is review</h2>
        <div className='container'>
          <div class='row row-cols-1 row-cols-md-3 g-4'>
            {allReviews.map((allReview) => (
              <div class='col'>
                <div class='card'>
                  <div class='card-body'>
                    <h5 class='card-title'>{allReview.name}</h5>
                    <p class='card-text'>{allReview.comments}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
