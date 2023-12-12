import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Contractors from './views/Contractors';
import Privacy from './views/Privacy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contractors" element={<Contractors />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
