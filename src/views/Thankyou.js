import React from 'react';
import '../assets/styles/Nav.css';
import '../assets/styles/Thanks.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Privacy = () => {
  return (
    <div>
      <Nav />
      <section className='thanks'>
        <h1 className='thanksTitle'>Thank you!</h1>
        <p className='thanksText thanksTextBold'>
        Your scheduled appointment for a FREE roofing estimate & inspection with Alexanders Roofing has been received! 
        </p>
        <p className='thanksText'>
        You will receive a call shortly to confirm your appointment details.
        <br></br> We look forward to helping you!
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Privacy;