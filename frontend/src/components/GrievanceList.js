import React, { useEffect, useState } from 'react';
import { getGrievances } from '../services/api';
import GrievanceItem from './GrievanceItem';

const GrievanceList = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    getGrievances(token).then((response) => {
      setGrievances(response.data);
    }).catch((error) => {
      alert('Error fetching grievances');
    });
  }, []);

  return (
    <div className="mt-4">
      {grievances.map(grievance => (
        <GrievanceItem key={grievance.id} grievance={grievance} />
      ))}
    </div>
  );
};

export default GrievanceList;
