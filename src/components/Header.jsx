// Header.js
import React from 'react';
import '../components/Header';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/loginpage');
        
    };
    const handleSignUpClick = () => {
        navigate('/signuppage');
        
    };
    
    return (
        <header className="header">
                        <div className="logo">
                <a href="/">
                    <img src="https://img.icons8.com/color/96/ambulance.png" alt="Logo" />
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
                <button onClick={handleLoginClick} className="button-link">Sign In</button>
                <button onClick={handleSignUpClick} className="button-link">Sign Up</button>
            </div>
        </header>
);
}

export default Header;
