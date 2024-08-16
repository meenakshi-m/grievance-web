import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';
import { logout } from '../services/api';

const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            window.open(`https://scholar.google.co.in/scholar?q=${encodeURIComponent(query)}&hl=en&as_sdt=0&as_vis=1&oi=scholart`, '_blank');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Grievance Website</Link>
                <div className="navbar-links">
                    <Link to="/" className="nav-item">Home</Link>
                    {isAuthenticated && (
                        <>
                            <Link to="/grievance" className="nav-item">Submit Grievance</Link>
                            <Link to="/admin" className="nav-item">Admin Dashboard</Link>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                            <Link to="/login" className="nav-item">Login</Link>
                            <Link to="/register" className="nav-item">Register</Link>
                        </>
                    )}
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button"><FaSearch /></button>
                    </form>
                    {isAuthenticated && (
                        <div className="dropdown">
                            <button className="nav-item profile-button">
                                <FaUserCircle size={20} />
                            </button>
                            <div className="dropdown-menu">
                                <Link to="/profile" className="nav-itemss">Profile</Link>
                                <button onClick={handleLogout} className="dropdown-item logout-button">Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
