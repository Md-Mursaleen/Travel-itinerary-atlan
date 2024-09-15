import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            console.log('Login successful: ', response);
            localStorage.setItem('email', email); // Store email in localStorage
            toast.success('Login successful!');
            setTimeout(() => navigate('/home'), 2000);
        } catch (error) {
            setError(error.message || 'An error occurred during login.');
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.cardContainer}>
                <div style={styles.leftContentContainer}>
                    <p style={styles.quoteTextStyle}>
                        "Travel is the only thing you buy that makes you richer." <br />
                        Start your journey with AI Trip Planner, your personalized travel itinerary generator.
                    </p>
                </div>
                <div style={styles.rightContentContainer}>
                    <div style={styles.formContainer}>
                        <h2 style={styles.textStyle}>Login</h2>
                        {error && <p style={styles.errorTextStyle}>{error}</p>}
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
                            <button onClick={handleLogin} style={styles.buttonContainer}>
                                Login <span style={{ marginLeft: '10px' }}>→</span>
                            </button>
                            <button onClick={() => navigate('/register')} style={styles.buttonContainer}>
                                Register <span style={{ marginLeft: '10px' }}>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://i.pinimg.com/736x/4c/32/f7/4c32f7322911644c66a249e283f07153.jpg)',
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
        flex: 1,
        paddingRight: '20px',
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
        height: '42px',
        marginLeft: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        color: '#000000',
        border: '2px solid #000000',
        // border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(255, 255, 255, 0.8)',
        transition: 'background-color 0.3s',
    },
    errorTextStyle: {
        margin: '10px 0',
        color: '#ff0000',
    },
};