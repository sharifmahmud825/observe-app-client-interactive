import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
  const [mangeOrders, setManageOrders] = useState([]);

  useEffect(() => {
    const url = `https://guarded-sierra-78507.herokuapp.com/manageOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  return (
    <div>
      <h2 className='text-primary'>Manage All order</h2>
      <div className='container my-4'>
        {mangeOrders.map((manageOrder) => (
          <div className='row'>
            <div className='col-12'>
              <div className='row bg-light p-2 my-2 '>
                <div className='col-md-3'>
                  <h6>{manageOrder.serviceName}</h6>
                </div>
                <div className='col-md-2'>
                  <h6>$ {manageOrder.price}</h6>
                </div>
                <div className='col-md-3'>
                  <h6> {manageOrder.email} </h6>
                </div>
                <div className='col-md-4'>
                  <button className='btn btn-warning me-2'>Accept</button>
                  <button className='btn btn-danger'>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
