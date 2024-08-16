import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

export const register = async (data) => {
  return await axios.post(`${API_URL}/auth/register`, data);
};

export const login = async (data) => {
  return await axios.post(`${API_URL}/auth/login`, data);
};

export const submitGrievance = async (formData) => {
  const token = localStorage.getItem('token');
  return await axios.post(`${API_URL}/grievances/submit`, formData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getGrievances = async (token) => {
  return await axios.get(`${API_URL}/grievances/user-grievances`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateGrievanceStatus = async (id, status) => {
  const token = localStorage.getItem('token');
  return await axios.put(`${API_URL}/grievances/update-status/${id}`, { status }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



export const logout = () => {
  localStorage.removeItem('token');
};
export const searchSite = async (query) => {
  const response = await axios.get(`${API_URL}/search`, {
    params: { q: query },
  });
  return response.data;
};

export const getUserGrievances = async () => {
  const token = localStorage.getItem('token');
  return await axios.get(`${API_URL}/grievances/user-grievances`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
