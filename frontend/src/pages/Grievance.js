import React from 'react';
import Navbar from '../components/Navbar';
import GrievanceForm from '../components/GrievanceForm'; // Adjust the path as necessary

const Grievance = () => {
  return (
    <div>
      <Navbar />
      
        <h2 className="text-center mt-5"> </h2>
        <GrievanceForm />
      
    </div>
  );
};

export default Grievance;
