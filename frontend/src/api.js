import axios from 'axios';

const API_URL = 'https://travel-itinerary-backend-9tzf.onrender.com';

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

export const generateItinerary = async (budget, interests, duration, source) => {
    try {
        const response = await axios.post(`${API_URL}/generate-itinerary`, {
            budget: parseInt(budget),
            interests: interests.split(',').map(interest => interest.trim()),
            duration: parseInt(duration),
            source,
        });
        return response.data.itinerary;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const generateItineraryWithDestination = async (budget, interests, duration, source, destination) => {
    try {
        const response = await axios.post(`${API_URL}/generate-itinerary-with-destination`, {
            budget: parseInt(budget),
            interests: interests.split(',').map(interest => interest.trim()),
            duration: parseInt(duration),
            source,
            destination,
        });
        return response.data.itinerary;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const getPlaces = async (location_name, type) => {
    try {
        const response = await axios.get(`${API_URL}/get-places`, {
            params: {
                location_name,
                type,
            },
        });
        return response.data.results;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const getWeather = async (location) => {
    try {
        const response = await axios.get(`${API_URL}/get-weather`, {
            params: {
                location,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const getDestinationWeather = async (location) => {
    try {
        const response = await axios.get(`${API_URL}/get-destination-weather`, {
            params: {
                location,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const getUserInfo = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/user-info`, {
            params: {
                email: email,
            },
        });
        return response.data.user;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const saveItinerary = async (itineraryData) => {
    try {
        const response = await axios.post(`${API_URL}/save-itinerary`, itineraryData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};

export const fetchItineraries = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/fetch-itineraries`, {
            params: {
                email,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network error');
    }
};


