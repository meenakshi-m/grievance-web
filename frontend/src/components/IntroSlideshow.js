import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this CSS file for styling

const IntroSlideshow = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Adjust the duration if needed

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro-container">
      <h1 className="intro-text">Hi.....</h1>
    </div>
  );
};

export default IntroSlideshow;
