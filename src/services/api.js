import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    console.log('Register response:', response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    console.log('Login response:', response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const getUserDetails = async (token) => {
  try {
    const response = await api.get('/auth/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Get user details response:', response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export const addCollectionItem = async (itemData, token) => {
  try {
    console.log('Sending token:', token); 
    const response = await api.post('/collection', itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Add item response:', response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error('Error adding collection item:', error);
    throw error;
  }
};


export const getCollectionItems = async (token) => {
  try {
    const response = await api.get('/collection', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Get items response:', response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error('Error fetching collection items:', error);
    throw error;
  }
};

export const updateCollectionItem = async (itemId, itemData, token) => {
  try {
    const response = await api.put(`/collection/${itemId}`, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating collection item:', error);
    throw error;
  }
};

export const deleteCollectionItem = async (itemId, token) => {
  try {
    const response = await api.delete(`/collection/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting collection item:', error);
    throw error;
  }
};

