import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
  const { id } = useParams();
  const [watches, setWatches] = useState([]);
  const [singleWatch, setSingleWatch] = useState({});

  useEffect(() => {
    fetch('https://guarded-sierra-78507.herokuapp.com/watches')
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  console.log(watches);

  const matchedData = watches.find((watch) => watch._id == id);
  setSingleWatch(matchedData);

  return (
    <div>
      <h2>This is order page</h2>
    </div>
  );
};

export default Orders;
