import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Grievance from './pages/Grievance';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import IntroSlideshow from './components/IntroSlideshow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';

import './App.css'; // Common CSS for the entire app

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroSlideshow />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
