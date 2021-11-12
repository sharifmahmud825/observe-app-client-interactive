import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
  const { id } = useParams();
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('https://guarded-sierra-78507.herokuapp.com/watches')
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
      });
  }, []);
  // console.log(watches);

  const matchedData = watches.find((watch) => watch?._id == id);
  console.log(matchedData);

  const { _id, name, description, image, price } = matchedData || {};

  return (
    <div>
      <h2>This is order page {name} </h2>
    </div>
  );
};

export default Orders;
