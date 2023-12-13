import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Contractors from './views/Contractors';
import Privacy from './views/Privacy';
import Blog from './views/Blog';
import Thankyou from './views/Thankyou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contractors" element={<Contractors />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Thank-you" element={<Thankyou />} />
      </Routes>
    </Router>
  );
};

export default App;
