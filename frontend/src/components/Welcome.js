import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logo.png';

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
                <img src={logo} alt='Logo' style={styles.imageStyle} />
                <div style={styles.buttonsContainer}>
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
        justifyContent: 'space-between',
        backgroundImage: 'url(https://cdn.dribbble.com/users/1492844/screenshots/3307274/travel.gif)',
        backgroundRepeat: 'repeat-x',
    },
    imageStyle: {
        marginTop: '20px',
        marginLeft: '15px',
        width: '50px',
        height: '50px'
    },
    buttonsContainer: {
        marginTop: '20px',
        marginRight: '15px',
    },
    buttonContainer: {
        paddingHorizontal: '16px',
        paddingVertical: '10px',
        width: '100px',
        height: '40px',
        marginLeft: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        color: '#3350b9',
        border: '2px solid #3350b9',
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