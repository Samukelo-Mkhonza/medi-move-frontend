import React from 'react';
import '../components/Header';
import { useNavigate } from 'react-router-dom';


function OtherPagesHeader() 
{

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/signuppage');
    };
    
    return (
        <header className="header">
                        <div className="logo">
                <a href="/">
                    <img src="https://medimovebucket.s3.eu-west-1.amazonaws.com/medimove-logo.png" alt="Logo" />
                </a>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><button className="nav-link">About</button></li>
                    <li><button className="nav-link">Services</button></li>
                    <li><button className="nav-link">Contact</button></li>
                </ul>
            </nav>
            <div className="header-cta">
                <button onClick={handleLoginClick} className="button-link">Sign Up</button>
            </div>
        </header>
);
}

export default OtherPagesHeader;
