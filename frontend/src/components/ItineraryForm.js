import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { generateItinerary, generateItineraryWithDestination } from '../api';
import ItineraryDisplay from './ItineraryDisplay';
import Navbar from './Navbar';
import 'react-toastify/dist/ReactToastify.css';

function ItineraryForm() {
    const [budget, setBudget] = useState('');
    const [interests, setInterests] = useState('');
    const [duration, setDuration] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [loading, setLoading] = useState(false);
    const [itinerary, setItinerary] = useState(null);

    const handleGenerateItinerary = async () => {
        if (!budget || !interests || !duration || !source) {
            toast.error('Please fill in all required fields.');
            return;
        }

        setLoading(true);
        try {
            let itineraryData;

            if (destination) {
                itineraryData = await generateItineraryWithDestination(budget, interests, duration, source, destination);
            } else {
                itineraryData = await generateItinerary(budget, interests, duration, source);
            }
            setItinerary(itineraryData);
            toast.success('Itinerary generated successfully!');
        } catch (error) {
            console.error('Error generating itinerary: ', error);
            toast.error('Failed to generate itinerary. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <Navbar />
            <div style={styles.formContainer}>
                <h2 style={styles.headerTextStyle}>Create Your Travel Itinerary</h2>
                <div>
                    <input placeholder="Budget (in ₹)"
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        style={styles.textInputStyle} />
                    <input placeholder="Interests (comma separated)"
                        type="text"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        style={styles.textInputStyle} />
                    <input placeholder="Duration (days)"
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        style={styles.textInputStyle} />
                    <input placeholder="Source"
                        type="text"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        style={styles.textInputStyle} />
                    <input placeholder="Destination (optional)"
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        style={styles.textInputStyle} />
                    <button onClick={handleGenerateItinerary} style={styles.buttonContainer}
                        disabled={loading}>
                        {loading ? 'Generating...' : 'Generate Itinerary'}
                    </button>
                </div>
                <ToastContainer />
            </div>
            <div style={styles.displayContainer}>
                {itinerary ? (
                    <ItineraryDisplay itinerary={itinerary} />
                ) : (
                    <p>Please fill out the form and generate an itinerary.</p>
                )}
            </div>
        </div>
    );
}

export default ItineraryForm;

const styles = {
    container: {
        flex: 1,
        padding: '40px',
        marginTop: '80px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        display: 'flex',
        alignSelf: 'center',
        backgroundImage: 'url(https://i.pinimg.com/originals/d7/ae/01/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    },
    formContainer: {
        flex: 1,
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '15px 0 0 15px',
        borderRight: '1px solid #dddddd',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
    },
    headerTextStyle: {
        marginBottom: '20px',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333333',
    },
    textInputStyle: {
        padding: '10px',
        margin: '10px',
        width: '90%',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #dddddd',
    },
    buttonContainer: {
        padding: '15px 30px',
        margin: '20px',
        backgroundColor: '#28a745',
        fontSize: '18px',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)',
        transition: 'background-color 0.3s',
    },
    displayContainer: {
        flex: 2,
        padding: '20px',
        maxHeight: '80vh',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '0 15px 15px 0',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
        overflowY: 'auto',
    },
};