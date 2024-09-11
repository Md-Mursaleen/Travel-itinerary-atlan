import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    // function to handle register button click
    const handleRegister = async () => {
        try {
            const response = await register(username, email, password);
            console.log('Registration successful:', response);
            toast.success('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setError(error.message || 'An error occurred during registration.');
            toast.error('Registration failed! Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.leftContent}>
                    <p style={styles.quote}>
                        "The world is a book, and those who do not travel read only one page."
                        <br />
                        Start your adventure with Musafir, where we create personalized itineraries tailored to your budget, interests, and duration.
                    </p>
                </div>
                <div style={styles.rightContent}>
                    <div style={styles.form}>
                        <h2>Register</h2>
                        {error && <p style={styles.error}>{error}</p>}
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                        <div style={styles.buttonContainer}>
                            <button onClick={handleRegister} style={styles.button}>
                                Register <span style={styles.buttonIcon}>→</span>
                            </button>
                            <button onClick={() => navigate('/login')} style={styles.button}>
                                Login <span style={styles.buttonIcon}>→</span>
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
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        maxWidth: '900px',
        padding: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    leftContent: {
        flex: 1,
        textAlign: 'left',
        paddingRight: '20px',
    },
    rightContent: {
        flex: 1,
        textAlign: 'right',
    },
    quote: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        fontStyle: 'italic',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px',
        boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)',
        transition: 'background-color 0.3s',
        flex: 1,
    },
    buttonIcon: {
        marginLeft: '10px',
    },
    error: {
        color: 'red',
        margin: '10px 0',
    },
};