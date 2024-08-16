# Grievance Website

## Overview

The Grievance Website is a platform that allows users to submit grievances, track their status, and manage them effectively through an admin dashboard. The platform is designed to ensure transparency and accountability in addressing issues and concerns raised by users.

## Features

- **User Registration & Login**: Users can create an account, log in securely, and manage their grievances.
- **Submit Grievance**: Users can submit grievances by filling out a form with relevant details and attaching any supporting documents.
- **Profile Management**: Users can view their submitted grievances and their status on their profile page.
- **Admin Dashboard**: Administrators can view all submitted grievances, mark them as resolved, and manage the grievance records.
- **Search Functionality**: Users can search for articles related to grievances through Google Scholar directly from the website.

## Technologies Used

- **Frontend**: 
  - React.js
  - HTML5
  - CSS3
  - Bootstrap

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (as the database)

- **Authentication**:
  - JWT (JSON Web Token)

- **Other Tools**:
  - Git for version control
  - GitHub for repository management

## Pages and Components

- **Home Page**: The landing page of the website with an introduction to the platform.
- **Login Page**: Allows users to log in to their accounts.
- **Registration Page**: Enables users to create a new account.
- **Submit Grievance Page**: A form for users to submit new grievances.
- **Profile Page**: Displays the logged-in user's grievances and their status.
- **Admin Dashboard**: Accessible to administrators for managing grievances.
- **Search Bar**: Located in the navigation bar, allowing users to search for grievance-related articles on Google Scholar.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed and running locally or on a cloud service.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/meenakshi-m/GRWE.git
2. Navigate to the project directory
3. Install dependencies for both frontend and backend:
cd frontend
npm install
cd backend
npm install 

4.Set up environment variables in a .env file in the backend directory:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Running the Application

    1.Start the backend server:
               cd backend
               npm start
    Start the frontend development server:
              cd frontend
              npm start
    Open your web browser and navigate to http://localhost:3000.
  Deployment
  Ensure all environment variables are properly set up on the server.
  Build the frontend for production:

  

cd frontend
npm run build

Deploy both the frontend and backend to your preferred hosting service.


