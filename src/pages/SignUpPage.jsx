import React from 'react';
import Footer from '../components/Footer';
// import LoginMainContent from '../components/LoginMainContent';
import SignUpMainContent from '../components/SignUpMainContent';
import SignUpHeader from '../components/SignUpHeader';

function SignUpPage() {
    return (
        <div>
            <SignUpHeader />
            <SignUpMainContent/>
            <Footer />
        </div>
    );
}
export default SignUpPage;