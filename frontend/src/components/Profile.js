import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getUserGrievances } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Profile = () => {
  const [grievances, setGrievances] = useState([]);
  const { userEmail } = useAuth(); // Get the logged-in user's email from AuthContext

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await getUserGrievances();
        // Filter grievances to only include those submitted by the logged-in user's email
        const userGrievances = response.data.filter(grievance => grievance.email === userEmail);
        setGrievances(userGrievances);
      } catch (error) {
        console.error('Error fetching grievances:', error);
      }
    };
    
    fetchGrievances();
  }, [userEmail]);

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2>Profile</h2>
        <p>Email: {userEmail}</p>
        <h3>Your Grievances:</h3>
        <ul>
          {grievances.map((grievance, index) => (
            <li key={index} className="grievance-item">
              <strong>{grievance.title}</strong><br />
              "{grievance.description}"<br />
              Status: {grievance.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
