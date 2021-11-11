import React from 'react';
import { Link } from 'react-router-dom';

const Watch = (props) => {
  const { _id, name, price, image, description } = props.watch;
  return (
    <div>
      <div class='col'>
        <div class='card'>
          <img
            src={image}
            class='card-img-top'
            alt='...'
            className='img-fluid'
          />
          <div class='card-body'>
            <h5 class='card-title'>{name}</h5>
            <h5 class='card-text fw-bold'>$ {price}</h5>
            <Link to={`/orders/${_id}`}>
              <button className='btn btn-warning'>
                <i className='fas fa-shopping-cart me-2'></i>Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
