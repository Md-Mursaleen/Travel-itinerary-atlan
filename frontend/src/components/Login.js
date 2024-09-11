import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    // function to handle login button click
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

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(https://i.pinimg.com/564x/a4/50/6e/a4506ee296a6dbd7aa6fe26abd70ebf9.jpg)', // Replace with your own image URL

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
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
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

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.leftContent}>
                    <p style={styles.quote}>
                        "Travel is the only thing you buy that makes you richer." <br />
                        Start your journey with Musafir, your personalized travel itinerary generator.
                    </p>
                </div>
                <div style={styles.rightContent}>
                    <div style={styles.form}>
                        <h2>Login</h2>
                        {error && <p style={styles.error}>{error}</p>}
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
                            <button onClick={handleLogin} style={styles.button}>
                                Login <span style={styles.buttonIcon}>→</span>
                            </button>
                            <button onClick={() => navigate('/register')} style={styles.button}>
                                Register <span style={styles.buttonIcon}>→</span>
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