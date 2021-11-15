import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../context/useAuth';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `https://guarded-sierra-78507.herokuapp.com/myOrders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  console.log(myOrders);
  return (
    <div>
      <div className='container my-4'>
        {myOrders.map((myOrder) => (
          <div className='row'>
            <div className='col-12'>
              <div className='row bg-light p-2 my-2 '>
                <div className='col-md-5'>
                  <h6>{myOrder.serviceName}</h6>
                </div>
                <div className='col-md-2'>
                  <h6>$ {myOrder.price}</h6>
                </div>
                <div className='col-md-3'>
                  <h6> {myOrder.email} </h6>
                </div>
                <div className='col-md-2'>
                  <h6 className='text-muted'>processing</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
