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
            console.log('Login successful:', response);
            localStorage.setItem('email', email); // Store email in localStorage
            toast.success('Login successful!');
            setTimeout(() => navigate('/home'), 2000); // Redirect after 2 seconds
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
                        Start your journey with Musafir, your personalized travel itinerary generator.
                    </p>
                </div>
                <div style={styles.rightContentContainer}>
                    <div style={styles.formContainer}>
                        <h2>Login</h2>
                        {error && <p style={styles.errorTextStyle}>{error}</p>}
                        <input placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.textAlign} />
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
        backgroundImage: 'url(https://i.pinimg.com/564x/a4/50/6e/a4506ee296a6dbd7aa6fe26abd70ebf9.jpg)',
        backgroundPosition: 'center',
    },
    cardContainer: {
        padding: '40px',
        width: '80%',
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
        fontStyle: 'italic',
        color: '#333333',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInputStyle: {
        padding: '10px',
        margin: '10px 0',
        width: '100%',
        fontSize: '16px',
        border: '1px solid #cccccc',
        borderRadius: '5px',
    },
    buttonsContainer: {
        marginTop: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1,
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#007bff',
        fontSize: '16px',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
        transition: 'background-color 0.3s',
    },
    errorTextStyle: {
        margin: '10px 0',
        color: 'red',
    },
};