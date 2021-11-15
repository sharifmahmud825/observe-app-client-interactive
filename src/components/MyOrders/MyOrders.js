import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `https://guarded-sierra-78507.herokuapp.com/myOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  console.log(myOrders);
  return (
    <div>
      {myOrders.map((myOrder) => (
        <h1>{myOrder.serviceName}</h1>
      ))}
    </div>
  );
};

export default MyOrders;
