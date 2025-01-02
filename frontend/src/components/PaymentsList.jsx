import React from 'react';

const PaymentsList = ({ project }) => {
  return (
    <div>
      <h2 className="text-primary">Payments List</h2>
      <ul className="list-group">
        {project.map((item) => (
          <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              Amount: ${item.amount} - Status: {item.status}
            </div>
            <div>
              <button
                className="btn btn-success m-1 px-4"

                disabled={item.status === 'Completed'}
              >
                Paid
              </button>
              <button
                className="btn btn-danger m-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentsList;
