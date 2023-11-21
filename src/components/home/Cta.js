import React from 'react';
import '../../styles/Home.css';

function Cta() {
  return (
    <section className="cta">
    <div className="squareCta">
      <h2 className="ctaTitle">Take the stress out of finding <span id='orange'>the right pro</span></h2>
      <p className="ctaDesc">The research and interviews are already done for you.</p>
      <p className="ctaDesc"><span className="strong strongCta">Get a top-notch professional in your area today!</span></p>
      <br></br>
      <a className='buttonCta' href="#">Start now</a>
    </div>
  </section>
      );
}

export default Cta;
