import React from 'react';
import './LoginMainContent';
import { useNavigate } from 'react-router-dom';

function LoginMainContent() {
    const navigate = useNavigate();
    const handleDriverLoginClick = () => {
        navigate('/driverdashboard');

    };


    const handleDoctorLoginClick = () => {
        navigate('/doctordashboard');

    };

    return (
        <div className="main-content">
            <div className="sign-in-page">
                <button className="button-link" onClick={handleDriverLoginClick}>Sign In as Driver</button>
                <button className="button-link" onClick={handleDoctorLoginClick}>Sign In as Practitioner</button>
            </div>
        </div>

    );
}

export default LoginMainContent;