import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSave, faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getWeather, getDestinationWeather, saveItinerary } from '../api';
import ExplorePlacesModal from './ExplorePlacesModal';
import ItineraryWithPlaces from './ItineraryWithPlaces';
import axios from 'axios';

const ItineraryDisplay = ({ itinerary }) => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [placeDetails, setPlaceDetails] = useState(null);
    const [resultsModalShow, setResultsModalShow] = useState(false);
    const [sourceWeather, setSourceWeather] = useState(null);
    const [destinationWeather, setDestinationWeather] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (itinerary) {
            const mainLocation = itinerary.places ? itinerary.places.split(', ')[0] : null;
            const { source, destination } = itinerary;
            fetchWeather(source, destination || mainLocation);
        }
    }, [itinerary]);

    const fetchWeather = async (source, destination) => {
        try {
            if (source) {
                const sourceWeatherData = await getWeather(source);
                setSourceWeather(sourceWeatherData);
            }

            if (destination) {
                const destinationWeatherData = await getDestinationWeather(destination);
                setDestinationWeather(destinationWeatherData);
            }
        } catch (error) {
            console.error('Error fetching weather: ', error);
        }
    };

    const handleExplorePlaces = (day) => {
        setSelectedDay(day);
        setModalShow(true);
    };

    const handleExplore = async (locationName, type) => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/get-places`, {
                params: {
                    location_name: locationName,
                    type: type,
                },
            });
            console.log('Places found: ', response.data.results);
            setPlaceDetails(response.data.results);
            setResultsModalShow(true);
        } catch (error) {
            console.error('Error fetching places: ', error);
        }
    };

    const handleSaveItinerary = async () => {
        setSaving(true);
        try {
            const user_email = localStorage.getItem('email'); // Get the user email from localStorage
            const dataToSave = { user_email, itinerary_data: itinerary };
            await saveItinerary(dataToSave);
            alert('Itinerary saved successfully!');
        } catch (error) {
            console.error('Error saving itinerary: ', error);
            alert('Failed to save itinerary. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        alert('Logout successful!');
        navigate('/login');
    };

    if (!itinerary) {
        return <p>No itinerary available</p>;
    }

    const { budget, itinerary: itineraryDetails, places, notes } = itinerary;

    return (
        <div>
            <nav style={styles.navContainer}>
                <button onClick={() => navigate('/home')}
                    style={styles.buttonContainer}>
                    <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
                    Home
                </button>
                <button onClick={() => navigate('/profile')}
                    style={styles.buttonContainer}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
                    Profile
                </button>
                <button onClick={handleLogout}
                    style={styles.buttonContainer}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '10px' }} />
                    Logout
                </button>
            </nav>
            <div style={styles.weathersHeaderContainer}>
                <h2>Your Travel Itinerary</h2>
                <div style={styles.weathersContainer}>
                    {/* Weather Information for Source */}
                    {sourceWeather && (
                        <div style={styles.sourceWeatherContainer}>
                            <h4>Weather in {sourceWeather.name}, {sourceWeather.sys.country}</h4>
                            <p>{sourceWeather.weather[0].description}</p>
                            <p>Temperature: {Math.round(sourceWeather.main.temp - 273.15)}°C</p>
                            <p>Humidity: {sourceWeather.main.humidity}%</p>
                            <img src={`http://openweathermap.org/img/w/${sourceWeather.weather[0].icon}.png`} alt="Weather icon" />
                        </div>
                    )}

                    {/* Weather Information for Destination */}
                    {destinationWeather && (
                        <div style={styles.destinationWeatherContainer}>
                            <h4>Weather in {destinationWeather.name}, {destinationWeather.sys.country}</h4>
                            <p>{destinationWeather.weather[0].description}</p>
                            <p>Temperature: {Math.round(destinationWeather.main.temp - 273.15)}°C</p>
                            <p>Humidity: {destinationWeather.main.humidity}%</p>
                            <img src={`http://openweathermap.org/img/w/${destinationWeather.weather[0].icon}.png`} alt="Weather icon" />
                        </div>
                    )}
                </div>

                {/* Budget Breakdown */}
                {budget && budget.breakdown && (
                    <>
                        <h3>Budget Breakdown</h3>
                        <ul>
                            {Object.entries(budget.breakdown).map(([item, cost]) => (
                                <li key={item}>
                                    <strong>{item.charAt(0).toUpperCase() + item.slice(1)}:</strong> {cost}
                                </li>
                            ))}
                            <li><strong>Total:</strong> {budget.total}</li>
                        </ul>
                    </>
                )}

                {/* Places Covered */}
                {places && (
                    <div>
                        <h3>Places Covered</h3>
                        <p>{places}</p>
                    </div>
                )}

                {/* Daily Itinerary */}
                {itineraryDetails && itineraryDetails.days && (
                    <>
                        <h3>Daily Itinerary</h3>
                        <div style={styles.daysContainer}>
                            {itineraryDetails.days.map((day, index) => (
                                <div key={day.day} style={styles.dayContainer}>
                                    {/* Circle for Day */}
                                    <div style={{ marginRight: '20px' }}>
                                        <div style={styles.dayCircleContainer}>
                                            {`Day ${day.day}`}
                                        </div>
                                        {index !== itineraryDetails.days.length - 1 && (
                                            <div style={styles.dayBorderContainer} />
                                        )}
                                    </div>

                                    {/* Card for Day Details */}
                                    <div style={styles.dayDetailsContainer}>
                                        <h4>{day.heading}</h4>
                                        <p>{day.description}</p>
                                        <ul>
                                            {day.activities.map((activity, index) => (
                                                <li key={index}>
                                                    <strong>{activity.name}</strong> - {activity.type} ({activity.cost})
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Explore Icon on the Top Right */}
                                        <FontAwesomeIcon icon={faMapMarkerAlt}
                                            size="lg"
                                            style={styles.fontAwesomeIconStyle}
                                            onClick={() => { }}  //upcoming functionality
                                            title={`Explore famous places for Day ${day.day}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Modal for Exploring Places */}
                <ExplorePlacesModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    places={places ? places.split(', ') : []}
                    onExplore={handleExplore} />

                {/* Modal to Show Fetched Places */}
                {placeDetails && (
                    <ItineraryWithPlaces
                        show={resultsModalShow}
                        onHide={() => setResultsModalShow(false)}
                        placeDetails={placeDetails} />
                )}

                {/* Save Itinerary Button */}
                <div style={styles.saveButtonHeaderContainer}>
                    <button onClick={handleSaveItinerary}
                        style={styles.saveButtonContainer}
                        disabled={saving}>
                        {saving ? 'Saving...' : 'Save Itinerary'}
                        <FontAwesomeIcon icon={faSave} style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItineraryDisplay;

const styles = {
    navContainer: {
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#007bff',
        color: '#ffffff',
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        fontSize: '18px',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
    },
    saveButtonHeaderContainer: {
        marginTop: '20px',
        textAlign: 'center',
    },
    saveButtonContainer: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        fontSize: '18px',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    fontAwesomeIconStyle: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: '#007bff',
        cursor: 'pointer',
    },
    dayDetailsContainer: {
        flex: 1,
        position: 'relative',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #dddddd',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    dayCircleContainer: {
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#ffffff',
        borderRadius: '50%',
    },
    dayBorderContainer: {
        position: 'absolute',
        top: '75px',
        left: '50%',
        width: '2px',
        height: '280px',
        backgroundColor: '#007bff',
    },
    daysContainer: {
        position: 'relative',
        paddingLeft: '20px',
        marginTop: '20px',
    },
    dayContainer: {
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
    },
    weathersHeaderContainer: {
        marginTop: '20px',
        padding: '20px',
        textAlign: 'left',
        borderRadius: '8px',
    },
    weathersContainer: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    destinationWeatherContainer: {
        flex: 1,
        padding: '10px',
        marginLeft: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #dddddd',
        borderRadius: '8px',
    },
    sourceWeatherContainer: {
        flex: 1,
        padding: '10px',
        marginRight: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #dddddd',
        borderRadius: '8px',
    },
};