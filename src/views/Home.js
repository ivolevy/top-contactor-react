import React from 'react';
import Header from '../components/Header';
import Works from '../components/Works';
import Services from '../components/Services';
import Parallax from '../components/Parallax';
import Testimonials from '../components/Testimonials';
import Tips from '../components/Tips';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Works />
      <Services />
      <Parallax />
      <Testimonials />
      <Tips />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
