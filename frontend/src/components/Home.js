import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

function Home() {
    const navigate = useNavigate();

    const goToItineraryPage = () => {
        navigate('/create-itinerary');
    };

    return (
        <div style={styles.body}>
            <Navbar />
            <div style={styles.container}>
                <h1 style={styles.headerTextStyle}>Musafir - <i>Har Safar m Apka Humsafar</i></h1>
                <p style={styles.quoteTextStyle}>"Travel is the only thing you buy that makes you richer."</p>
                <div style={styles.buttonsContainer}>
                    <button onClick={goToItineraryPage} style={styles.buttonContainer}>
                        Create a Personalized Travel Itinerary
                    </button>
                </div>
                <div style={styles.section}>
                    <h2 style={styles.sectionHeaderTextStyle}>What You Can Experience</h2>
                    <div style={styles.experienceSection}>
                        <div style={styles.experienceCardContainer}>
                            <img src="https://i.pinimg.com/564x/b3/b5/c4/b3b5c4075cf4efbe55938cc0db655752.jpg" alt="Adventure" style={styles.image} />
                            <h3>Adventure Awaits</h3>
                            <p>Experience the thrill of adventure with custom itineraries tailored to your need for excitement.</p>
                        </div>
                        <div style={styles.experienceCardContainer}>
                            <img src="https://i.pinimg.com/564x/c4/17/11/c41711124b4fa243a7bd64d09e773fe5.jpg" alt="Relaxation" style={styles.image} />
                            <h3>Relax and Unwind</h3>
                            <p>Find peace and tranquility with travel plans that offer serene and relaxing experiences.</p>
                        </div>
                        <div style={styles.experienceCardContainer}>
                            <img src="https://i.pinimg.com/564x/e9/e8/2d/e9e82ddbaff121f4616d5ebb7efbdaeb.jpg" alt="Culture" style={styles.image} />
                            <h3>Cultural Immersion</h3>
                            <p>Immerse yourself in the culture of your destinations, with itineraries that focus on heritage and local experiences.</p>
                        </div>
                    </div>
                </div>
                <div style={styles.testimonialSection}>
                    <h2 style={styles.sectionHeaderTextStyle}>What Our Travelers Say</h2>
                    <div style={styles.testimonialCardContainer}>
                        <p style={styles.testimonialTextStyle}>
                            "Musafir planned the perfect trip for my family. From the cultural sites to the best restaurants, every detail was thought out. We
                            can't wait for our next adventure!"
                        </p>
                        <p style={styles.testimonialAuthorTextStyle}>- A Satisfied Traveler</p>
                    </div>
                </div>
                <footer style={styles.footerContainer}>
                    <p style={{ fontSize: '14px' }}>© 2024 Musafir. All rights reserved.</p>
                </footer>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Home;

const styles = {
    body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    container: {
        padding: '20px',
        backgroundImage: 'url(https://i.pinimg.com/originals/31/41/6f/31416f0c6f763c947d08e6406c959cb7.gif)',
        backgroundPosition: 'center',
        textAlign: 'center',
    },
    headerTextStyle: {
        marginTop: '25px',
        marginBottom: '20px',
        fontSize: '62px',
        color: '#ffffff',
        textShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        animation: 'glow 1.5s ease-in-out infinite alternate',
    },
    '@keyframes glow': {
        '0%': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5)',
        },
        '100%': {
            textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.7)',
        },
    },
    buttonsContainer: {
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
    },
    buttonContainer: {
        padding: '15px 30px',
        margin: '10px',
        backgroundColor: '#28a745',
        fontSize: '18px',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)',
        transition: 'background-color 0.3s',
    },
    section: {
        padding: '50px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
        color: '#333',
        borderRadius: '15px',
        marginBottom: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        position: 'relative',
        overflow: 'hidden',
    },
    sectionHeaderTextStyle: {
        marginBottom: '20px',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    quoteTextStyle: {
        margin: '30px 0',
        fontSize: '24px',
        fontStyle: 'italic',
        color: '#555555',
    },
    experienceSection: {
        marginBottom: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    experienceCardContainer: {
        padding: '20px',
        margin: '10px',
        flexBasis: '30%',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(94, 110, 212, 0.8)',
    },
    testimonialSection: {
        padding: '50px 20px',
        backgroundColor: '#f8f8f8',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    testimonialCardContainer: {
        margin: '0 auto',
        maxWidth: '500px',
        textAlign: 'left',
    },
    testimonialTextStyle: {
        marginBottom: '20px',
        fontSize: '18px',
        color: '#555555',
    },
    testimonialAuthorTextStyle: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333333',
    },
    footerContainer: {
        position: 'relative',
        padding: '10px 0',
        bottom: 0,
        marginTop: '40px',
        width: '100%',
        backgroundColor: '#333333',
        color: '#ffffff',
        textAlign: 'center',
    },
};