import React from 'react';

const GrievanceItem = ({ grievance }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{grievance.type}</h5>
        <p className="card-text">{grievance.description}</p>
        <p className="card-text"><small className="text-muted">Status: {grievance.status}</small></p>
      </div>
    </div>
  );
};

export default GrievanceItem;
