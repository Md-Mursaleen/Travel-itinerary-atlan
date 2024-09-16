import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async () => {
        try {
            const response = await register(username, email, password);
            console.log('Registration successful: ', response);
            toast.success('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setError(error.message || 'An error occurred during registration.');
            toast.error('Registration failed! Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.cardContainer}>
                <div style={styles.leftContentContainer}>
                    <p style={styles.quoteTextStyle}>
                        "The world is a book, and those who do not travel read only one page."
                        <br />
                        Start your adventure with AI Trip Planner, where we create personalized itineraries tailored to your budget, interests, and duration.
                    </p>
                </div>
                <div style={styles.rightContentContainer}>
                    <div style={styles.formContainer}>
                        <h2 style={styles.textStyle}>Register</h2>
                        {error && <p style={styles.errorTextStyle}>{error}</p>}
                        <input placeholder="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.textInputStyle} />
                        <input placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.textInputStyle} />
                        <input placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.textInputStyle} />
                        <div style={styles.buttonsContainer}>
                            <button onClick={handleRegister} style={styles.buttonContainer}>
                                Register <span style={{ marginLeft: '10px' }}>→</span>
                            </button>
                            <button onClick={() => navigate('/login')} style={styles.buttonContainer}>
                                Login <span style={{ marginLeft: '10px' }}>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://i.pinimg.com/736x/5c/9e/39/5c9e399c2bd2fbf86f6c1ac2b5e095af.jpg)',
        backgroundPosition: 'center',
    },
    cardContainer: {
        padding: '40px',
        width: '60%',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    leftContentContainer: {
        paddingRight: '20px',
        flex: 1,
        textAlign: 'left',
    },
    rightContentContainer: {
        flex: 1,
        textAlign: 'right',
    },
    quoteTextStyle: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333333',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#000000',
    },
    textInputStyle: {
        padding: '10px',
        margin: '10px 0',
        width: '100%',
        fontSize: '16px',
        color: '#000000',
        border: '1px solid #cdcdcd',
        borderRadius: '5px',
    },
    buttonsContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1,
        paddingHorizontal: '16px',
        paddingVertical: '10px',
        margin: '5px',
        width: '120px',
        height: '43px',
        marginLeft: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        fontSize: '14px',
        fontWeight: '500',
        color: '#ffffff',
        border: '1px solid #000000',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(255, 255, 255, 0.8)',
        transition: 'background-color 0.3s',
    },
    errorTextStyle: {
        margin: '10px 0',
        color: '#ff0000',
    },
};