import React from 'react';
import '../assets/styles/Nav.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PrivacyPolicy from '../components/PrivacySection'

const Privacy = () => {
  return (
    <div>
      <Nav />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default Privacy;
