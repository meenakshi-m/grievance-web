import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';  // Import the AuthContext
import { submitGrievance } from '../services/api';
import '../pages/Login.css';

const GrievanceForm = () => {
  const { userEmail } = useAuth();  // Use the AuthContext to get the user's email

  const [formData, setFormData] = useState({
    email: userEmail,  // Set the email from AuthContext
    type: '',
    title: '',
    description: '',
    document: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'document') {
      setFormData({
        ...formData,
        document: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!formData.email || !formData.type || !formData.title || !formData.description || !formData.document) {
      setMessage('All fields are required.');
      return;
    }

    try {
      await submitGrievance(formData);
      setMessage('Grievance submitted successfully!');
      setFormData({ email: userEmail, type: '', title: '', description: '', document: null });
    } catch (error) {
      setMessage(`Error submitting grievance: ${error.response?.data?.message || 'Server error'}`);
    }
  };

  return (
    <div className="grievance-form-container">
      <div className="grievance-form">
        <h2>Submit Grievance</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            readOnly // Make the email field read-only as it should not be changed
          />

          <label>Type</label>
          <input 
            type="text" 
            name="type" 
            placeholder="Grievance type"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <label>Title</label>
          <input 
            type="text" 
            name="title" 
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea 
            name="description" 
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Upload Supporting Document</label>
          <input 
            type="file" 
            name="document"
            onChange={handleChange}
            required
          />

          <button className="grievance-btn" type="submit">Submit Grievance</button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default GrievanceForm;
