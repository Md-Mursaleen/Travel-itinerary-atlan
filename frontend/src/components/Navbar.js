import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('Logout successful!');
        navigate('/login');
    };

    const handleProfile = () => {
        navigate('/profile');
    };

    return (
        <nav style={styles.navBarContainer}>
            <button onClick={() => navigate('/home')} style={styles.navButtonContainer}>
                <FontAwesomeIcon icon={faHome} style={styles.iconStyle} />
                Home
            </button>
            <button onClick={handleProfile} style={styles.navButtonContainer}>
                <FontAwesomeIcon icon={faUser} style={styles.iconStyle} />
                Profile
            </button>
            <button onClick={handleLogout} style={styles.navButtonContainer}>
                <FontAwesomeIcon icon={faSignOutAlt} style={styles.iconStyle} />
                Logout
            </button>
        </nav>
    );
}

export default Navbar;

const styles = {
    navBarContainer: {
        position: 'fixed',
        padding: '10px 0px',
        left: 0,
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#ffffff',
        zIndex: 1000,
    },
    navButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        fontSize: '18px',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        transition: 'color 0.3s',
    },
    iconStyle: {
        marginRight: '8px',
    },
};