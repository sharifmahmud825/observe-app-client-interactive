import React from 'react';

const Watch = (props) => {
  const { name, price, image, description } = props.watch;
  return (
    <div>
      <div class='col'>
        <div class='card'>
          <img src={image} class='card-img-top' alt='...' />
          <div class='card-body'>
            <h5 class='card-title'>{name}</h5>
            <p class='card-text'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
