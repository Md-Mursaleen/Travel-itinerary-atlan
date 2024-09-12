import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('Logout successful!');
        navigate('/login');
    };

    const handleProfile = () => {
        navigate('/profile');
    };

    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
        },
        navButton: {
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.3s',
        },
        navButtonIcon: {
            marginRight: '8px',
        },
    };

    return (
        <nav style={styles.navbar}>
            <button onClick={() => navigate('/home')} style={styles.navButton}>
                <FontAwesomeIcon icon={faHome} style={styles.navButtonIcon} />
                Home
            </button>
            <button onClick={handleProfile} style={styles.navButton}>
                <FontAwesomeIcon icon={faUser} style={styles.navButtonIcon} />
                Profile
            </button>
            <button onClick={handleLogout} style={styles.navButton}>
                <FontAwesomeIcon icon={faSignOutAlt} style={styles.navButtonIcon} />
                Logout
            </button>
        </nav>
    );
}

export default Navbar;