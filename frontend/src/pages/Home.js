import React from 'react';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the login page when the button is clicked
  };

  return (
    <div className="home-container">
      <Navbar />
      <main className="main-content">
        <div className="text-section">
          <h1>Welcome to Grievance Web</h1>
          <p className="subtext">Your Voice, Your Rights, Our Responsibility</p>
          <p>
            This platform empowers individuals to voice their concerns and grievances directly to the appropriate authorities,
            ensuring that every issue is heard and addressed promptly. Our goal is to foster a transparent and responsive environment
            where users can submit, track, and resolve grievances with ease.
          </p>
          <p>
            Whether you’re facing issues at work, in your community, or within an organization, the Grievance Website provides a
            structured and user-friendly interface to ensure your concerns are documented and addressed. Through this platform, we
            strive to promote accountability and ensure that all voices are valued and considered in the decision-making process.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button> {/* Add onClick handler */}
        </div>
        <div className="visual-section">
          <Carousel className="feature-carousel">
            <Carousel.Item>
              <div className="carousel-slide">
                <h3>Submit Your Grievances Easily</h3>
                <p>Our platform makes it simple to voice your concerns to the right people.</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-slide">
                <h3>Track the Progress</h3>
                <p>Monitor the status of your grievances in real-time from your dashboard.</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-slide">
                <h3>Resolved Quickly</h3>
                <p>We ensure that every grievance is addressed promptly and effectively.</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Home;
