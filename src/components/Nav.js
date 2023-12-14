import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo&text.png';
import '../assets/styles/Nav.css';
import '../assets/styles/Styles.css';

const Nav = () => {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <Navbar className={`${isSticky ? 'stickyNavbar' : ''}`} bg="rgba(255, 255, 255, 0.5) position-fixed w-100 z-index1" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <NavLink to="/">
            <img src={logo} alt="" width="140" height="80" className="d-inline-block align-top img logoNav" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggler' />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <NavLink to="/" activeClassName="active">
            <Button className={`me-4 buttonNav ${location.pathname !== '/' && 'transparentBg'}`}>Find your perfect contractor</Button>
          </NavLink>
          <NavLink to="/Contractors" activeClassName="active">
            <Button className={`me-2 buttonNav buttonNav2 ${location.pathname !== '/Contractors' && 'transparentBg'}`}>Apply to join as a TopContractor</Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
