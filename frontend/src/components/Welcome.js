import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div style={styles.container}>
            <div style={styles.headerContainer}>
                <div style={{ padding: '15px' }}>
                    <button onClick={handleLogin} style={styles.buttonContainer}>
                        Login
                    </button>
                    <button onClick={handleRegister} style={styles.buttonContainer}>
                        Register
                    </button>
                </div>
            </div>
            <h1 style={styles.headingTextStyle}>
                Welcome to <span style={styles.textStyle}>Travel Mantra</span>
            </h1>
            <p style={styles.subHeadingTextStyle}>Your own personalized travel itinerary generator</p>
            <p style={styles.titleTextSytle}>Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workstations, and everyday adventures.</p>
        </div>
    );
}

export default WelcomePage;

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        height: '80vh',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundImage: 'url(https://cdn.dribbble.com/users/1492844/screenshots/3307274/travel.gif)',
        backgroundRepeat: 'repeat-x',
    },
    buttonContainer: {
        padding: '14px',
        width: '100px',
        height: '45px',
        marginLeft: '15px',
        backgroundColor: '#000000',
        fontSize: '14px',
        fontWeight: '500',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(255, 255, 255, 0.8)',
        transition: 'background-color 0.3s',
    },
    headingTextStyle: {
        fontSize: '55px',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    textStyle: {
        fontStyle: 'italic',
        color: '#f2a92e',
    },
    subHeadingTextStyle: {
        marginTop: '10px',
        fontSize: '30px',
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
    },
    titleTextSytle: {
        marginTop: '10px',
        fontSize: '20px',
        fontWeight: '400',
        color: '#333333',
        textAlign: 'center',
    },
};