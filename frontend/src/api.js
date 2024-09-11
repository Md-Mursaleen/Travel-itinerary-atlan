import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080';

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};


