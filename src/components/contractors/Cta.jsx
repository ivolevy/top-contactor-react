import React from 'react';
import '../../assets/styles/Contractors.css';
import '../../assets/styles/Styles.css';

const Cta = () => {
  return (
    <section className="ctaContractors">
    <div className="squareCtaContractors">
      <h2 className="ctaTitleContractors">We are <span id='orange'>matchmakers.</span></h2>
      <p className="ctaDescContractors">The research and interviews are already done for you.</p>
      <p className="ctaDescContractors">
        Establish yourself as the go-to contractor in your neighborhood and watch your business soar!
      </p>
      <p className='ctaSubDescContractors'>Consistent stream of quality leads, <br></br> guaranteed.</p>
      <br></br>
      <a className='buttonCtaContractors' href="#">Start now</a>
    </div>
  </section>
      );
}

export default Cta;
