import React from 'react';
import Header from '../components/home/Header';
import Works from '../components/home/Works';
import Services from '../components/home/Services';
import Parallax from '../components/home/Parallax';
import Testimonials from '../components/home/Testimonials';
import Tips from '../components/home/Tips';
import Cta from '../components/home/Cta';
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
