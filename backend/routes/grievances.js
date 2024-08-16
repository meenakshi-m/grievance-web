const express = require('express');
const router = express.Router();
const { submitGrievance, getGrievances, updateGrievanceStatus } = require('../controllers/grievanceController');
const authenticateToken = require('../middleware/authenticateToken');

// Define the route to submit a grievance
router.post('/submit', authenticateToken, submitGrievance);

// Define the route to get user grievances
router.get('/user-grievances', authenticateToken, getGrievances);

// Define the route to update grievance status
router.put('/update-status/:id', authenticateToken, updateGrievanceStatus);
  // Ensure this line exists

module.exports = router;
