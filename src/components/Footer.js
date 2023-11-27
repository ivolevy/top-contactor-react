import React from 'react';
import '../assets/styles/Footer.css'
import logo from '../assets/images/logo-footer.webp';

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footerLogo'>
            <img src={logo} alt="" className="footerImg" />
        </div>
        <div className='footerLinks'>
            <p className='footerText'><a className='footerLink footerLink2' href='#'>Apply to join as a Top Contractor</a></p>
            <p className='footerText'><a className='footerLink' href='#'>Find your perfect contractor</a></p>
        </div>
        <div className='footerLinks'>
            <p className='footerText email'>info@topcontractorlist.com</p>
            <p className='footerText'>© 2023 Top Contractor List all rights reserved</p>
            <p className='footerText'><a className='footerLink privacy' href='#'>Privacy & Terms</a></p>
        </div>
    </section>
  );
}

export default Footer;
