import React from 'react';
import '../assets/styles/Styles.css';
import '../assets/styles/Thanks.css';

const Thankyou = () => {

  return (
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
  );
}

export default Thankyou;