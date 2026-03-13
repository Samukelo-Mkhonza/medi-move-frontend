import React from 'react';
import '../components/Footer';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Medi Move. All rights reserved.</p>
                <div className="footer-links">
                    <button className="link-button">Privacy Policy</button>
                    <button className="link-button">Terms of Use</button>
                    <button className="link-button">Contact</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
