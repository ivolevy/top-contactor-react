import React from 'react';
import '../assets/styles/Nav.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ServiceForm from '../components/ServiceFC'

const ServiceFC = () => {
  return (
    <div>
      <Nav />
      <ServiceForm />
      <Footer />
    </div>
  );
}

export default ServiceFC;
