import React from 'react';
import Header from '../components/Header';
import Works from '../components/Works';
import Services from '../components/Services';
import Parallax from '../components/Parallax';
import Testimonials from '../components/Testimonials';
import Tips from '../components/Tips';

const Home = () => {
  return (
    <div>
      <Header />
      <Works />
      <Services />
      <Parallax />
      <Testimonials />
      <Tips />
    </div>
  );
};

export default Home;
