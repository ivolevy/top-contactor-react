import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Contractors from './views/Contractors';
import Privacy from './views/Privacy';
import Thankyou from './views/Thankyou';
import ServiceForm from './views/ServiceForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contractors" element={<Contractors />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Thank-you" element={<Thankyou />} />
        <Route path="/Contact-form" element={<ServiceForm />} />
      </Routes>
    </Router>
  );
};

export default App;
