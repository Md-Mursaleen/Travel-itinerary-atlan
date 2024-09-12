import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, fetchItineraries } from '../api'; // Import the API calls
import Navbar from './Navbar';  // Import the Navbar component

const Profile = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded itinerary

    const email = localStorage.getItem('email');  //  access user email from local browser storage


    // dropdown effect for saved itineraies
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

    const styles = {
        container: {
            height: '100vh',
            backgroundImage: 'url(https://i.pinimg.com/originals/71/e2/9e/71e29ed74f14223911310d9002443cbf.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden', // Prevent the background from scrolling
        },
        content: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'auto', // Allow scrolling within the content area
            width: '100%',
        },
        profileContainer: {
            marginTop: '80px',
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '1000px',
            maxHeight: '80vh', // Limit the height of the profile container to allow scrolling
            overflowY: 'auto', // Enable vertical scrolling within the profile container
        },
        leftPanel: {
            width: '30%',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            textAlign: 'left',
        },
        rightPanel: {
            width: '70%',
            padding: '20px',
        },
        profileItem: {
            marginBottom: '10px',
            fontSize: '18px',
            color: '#333',
        },
        itineraryItem: {
            marginBottom: '15px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
        },
        itineraryHeading: {
            fontSize: '20px',
            fontWeight: 'bold',
        },
        itineraryDetails: {
            paddingTop: '10px',
            display: expandedIndex === null ? 'none' : 'block', // Conditionally display itinerary details
        },
        budget: {
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#e9e9e9',
            borderRadius: '5px',
        },
        dayDetails: {
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        activityItem: {
            marginBottom: '5px',
        },
        error: {
            color: 'red',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <Navbar /> {/* Include the Navbar component here */}

            <div style={styles.content}>
                {loading ? (
                    <p>Loading user info...</p>
                ) : error ? (
                    <p style={styles.error}>{error}</p>
                ) : (
                    <div style={styles.profileContainer}>
                        <div style={styles.leftPanel}>
                            <div style={styles.profileItem}><strong>Email:</strong> {userInfo.email}</div>
                            <div style={styles.profileItem}><strong>Username:</strong> {userInfo.username}</div>
                        </div>

                        <div style={styles.rightPanel}>
                            <h2 style={styles.itineraryHeading}>Saved Itineraries</h2>
                            {itineraries.length > 0 ? (
                                itineraries.map((itinerary, index) => (
                                    <div
                                        key={index}
                                        style={styles.itineraryItem}
                                        onClick={() => toggleItinerary(index)}
                                    >
                                        <div style={styles.itineraryHeading}>Itinerary {index + 1}</div>
                                        {expandedIndex === index && (
                                            <div style={styles.itineraryDetails}>
                                                <p><strong>Places:</strong> {itinerary.itinerary_data.places}</p>
                                                <div style={styles.budget}>
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
                                                    <div key={dayIndex} style={styles.dayDetails}>
                                                        <h4>Day {day.day}: {day.heading}</h4>
                                                        <p>{day.description}</p>
                                                        <h5>Activities:</h5>
                                                        {day.activities.map((activity, activityIndex) => (
                                                            <div key={activityIndex} style={styles.activityItem}>
                                                                <p><strong>{activity.name}</strong> ({activity.type}) - {activity.cost}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                                <div style={styles.budget}>
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