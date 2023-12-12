import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Footer.css'
import logo from '../assets/images/logo-footer.webp';

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footerLogo'>
            <img src={logo} alt="" className="footerImg" />
        </div>
        <div className='footerLinks'>
            <p className='footerText'><NavLink className='footerLink footerLink2' to='/Contractors'>Apply to join as a Top Contractor</NavLink></p>
            <p className='footerText'><NavLink className='footerLink' to='/'>Find your perfect contractor</NavLink></p>
        </div>
        <div className='footerLinks'>
            <p className='footerText email'>info@topcontractorlist.com</p>
            <p className='footerText'>© 2023 Top Contractor List all rights reserved</p>
            <p className='footerText'><NavLink className='footerLink privacy' to='/Privacy'>Privacy & Terms</NavLink></p>
        </div>
    </section>
  );
}

export default Footer;
