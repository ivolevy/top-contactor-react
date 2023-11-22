import React from 'react';
import '../../assets/styles/Home.css';
import certified from '../../assets/images/certifiers.webp';

const Header = () => {
  return (
    <section className="parallax">
    <div className="squareParallax">
      <img src={certified} alt="" className="parallaxImg" />
      <h2 className="parallaxTitle">We are contractor certifiers. </h2>
      <p className="parallaxText">
        We understand that homeowners want to work with local professionals who are skilled, reliable, and trustworthy.
      </p>
      <p className="parallaxDesc">
        Our certification process includes{' '}
        <span className="strong">referencing, and both social and professional skills testing</span>. We conduct
        extensive background checks to verify the professional experience and track record of each contractor.
      </p>
    </div>
  </section>
      );
}

export default Header;
