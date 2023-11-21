import React from 'react';
import '../../styles/Contractors.css';

function Cta() {
  return (
    <section className="ctaContractors">
    <div className="squareCtaContractors">
      <h2 className="ctaTitleContractors">Take the stress out of finding <span id='orange'>the right pro</span></h2>
      <p className="ctaDescContractors">The research and interviews are already done for you.</p>
      <p className="ctaDescContractors"><span className="strong strongCtaContractors">Get a top-notch professional in your area today!</span></p>
      <br></br>
      <a className='buttonCtaContractors' href="#">Start now</a>
    </div>
  </section>
      );
}

export default Cta;
