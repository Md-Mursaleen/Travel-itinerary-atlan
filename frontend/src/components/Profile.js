import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, fetchItineraries } from '../api';
import Navbar from './Navbar';

const Profile = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const email = localStorage.getItem('email');  //  access user email from local browser storage

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserInfo(email);
                setUserInfo(userData);
                const itineraryData = await fetchItineraries(email);
                setItineraries(itineraryData.itineraries);
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Failed to load data');
                setLoading(false);
            }
        };
        fetchUserData();
    }, [email]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        navigate('/login');
    };

    const handleHome = () => {
        navigate('/home');
    };

    const toggleItinerary = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.contentContainer}>
                {loading ? (
                    <p>Loading user info...</p>
                ) : error ? (
                    <p style={styles.errorTextStyle}>{error}</p>
                ) : (
                    <div style={styles.profileContainer}>
                        <div style={styles.leftPanelContainer}>
                            <div style={styles.profileItemContainer}><strong>Email:</strong> {userInfo.email}</div>
                            <div style={styles.profileItemContainer}><strong>Username:</strong> {userInfo.username}</div>
                        </div>
                        <div style={styles.rightPanelContainer}>
                            <h2 style={styles.itineraryHeadingTextStyle}>Saved Itineraries</h2>
                            {itineraries.length > 0 ? (
                                itineraries.map((itinerary, index) => (
                                    <div key={index}
                                        style={styles.itineraryItemContainer}
                                        onClick={() => toggleItinerary(index)}>
                                        <div style={styles.itineraryHeadingTextStyle}>Itinerary {index + 1}</div>
                                        {expandedIndex === index && (
                                            <div style={styles.itineraryDetailsContainer}>
                                                <p><strong>Places:</strong> {itinerary.itinerary_data.places}</p>
                                                <div style={styles.budgetContainer}>
                                                    <p><strong>Total Budget:</strong> {itinerary.itinerary_data.budget.total}</p>
                                                    <p><strong>Breakdown:</strong></p>
                                                    <ul>
                                                        {Object.entries(itinerary.itinerary_data.budget.breakdown).map(([key, value]) => (
                                                            <li key={key}>{key}: {value}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <h3>Itinerary Details:</h3>
                                                {itinerary.itinerary_data.itinerary.days.map((day, dayIndex) => (
                                                    <div key={dayIndex} style={styles.dayDetailsContainer}>
                                                        <h4>Day {day.day}: {day.heading}</h4>
                                                        <p>{day.description}</p>
                                                        <h5>Activities:</h5>
                                                        {day.activities.map((activity, activityIndex) => (
                                                            <div key={activityIndex} style={{ marginBottom: '5px' }}>
                                                                <p><strong>{activity.name}</strong> ({activity.type}) - {activity.cost}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                                <div style={styles.budgetContainer}>
                                                    <p><strong>Notes:</strong> {itinerary.itinerary_data.notes}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No saved itineraries found.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url(https://i.pinimg.com/originals/71/e2/9e/71e29ed74f14223911310d9002443cbf.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
    },
    contentContainer: {
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'auto',
    },
    profileContainer: {
        marginTop: '80px',
        width: '80%',
        maxHeight: '80vh',
        maxWidth: '1000px',
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',
    },
    leftPanelContainer: {
        padding: '20px',
        width: '30%',
        backgroundColor: '#f5f5f5',
        textAlign: 'left',
    },
    rightPanelContainer: {
        padding: '20px',
        width: '70%',
    },
    profileItemContainer: {
        marginBottom: '10px',
        fontSize: '18px',
        color: '#333333',
    },
    itineraryItemContainer: {
        padding: '15px',
        marginBottom: '15px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    },
    itineraryHeadingTextStyle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    itineraryDetailsContainer: {
        paddingTop: '10px',
        display: expandedIndex === null ? 'none' : 'block',
    },
    budgetContainer: {
        padding: '10px',
        marginTop: '10px',
        backgroundColor: '#e9e9e9',
        borderRadius: '5px',
    },
    dayDetailsContainer: {
        padding: '10px',
        marginTop: '10px',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    errorTextStyle: {
        marginTop: '20px',
        color: '#ff0000',
    },
};