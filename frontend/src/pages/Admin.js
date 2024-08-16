import React, { useState, useEffect, useCallback } from 'react';
import { getGrievances, updateGrievanceStatus, logout } from '../services/api';
import { Table, Container, Row, Col, Button, Alert, Spinner } from 'react-bootstrap';
import './Auth.css'; // Updated CSS file
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const fetchGrievances = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await getGrievances(token);
            setGrievances(response.data);
        } catch (error) {
            setMessage('Error fetching grievances');
        } finally {
            setLoading(false);
        }
    }, []);

    const handleMarkAsResolved = async (grievanceId) => {
        try {
            await updateGrievanceStatus(grievanceId, 'Resolved');
            setMessage('Grievance status updated');
            fetchGrievances(); // Refresh the list after update
        } catch (error) {
            setMessage(`Error updating status: ${error.response?.data?.message || 'Server error'}`);
        }
    };

    const handleLogout = useCallback(() => {
        logout();
        navigate('/login');
    }, [navigate]);

    useEffect(() => {
        fetchGrievances();
    }, [fetchGrievances]);

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" />
            </Container>
        );
    }

    return (
        <Container className="mt-5 dashboard-container">
            <Row>
                <Col>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-center">Admin Dashboard</h2>
                        <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </div>
                    {message && <Alert variant="info">{message}</Alert>}
                    <Table striped bordered hover responsive className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Date Submitted</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grievances.map((grievance) => (
                                <tr key={grievance._id}>
                                    <td>{grievance.email}</td>
                                    <td>{grievance.type}</td>
                                    <td>{grievance.title}</td>
                                    <td>{grievance.description}</td>
                                    <td>{grievance.status}</td>
                                    <td>{new Date(grievance.createdAt).toLocaleString()}</td>
                                    <td>
                                        {grievance.status === 'Pending' && (
                                            <Button
                                                variant="success"
                                                size="sm"
                                                onClick={() => handleMarkAsResolved(grievance._id)}
                                            >
                                                Mark as Resolved
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
