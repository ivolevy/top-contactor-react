import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo&text.png';
import '../assets/styles/Nav.css'

const Nav = () => {
  return (
    <Navbar bg="rgba(255, 255, 255, 0.5)" expand="lg" className="position-absolute w-100 z-index-1">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" width="140" height="80" className="d-inline-block align-top img logoNav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Button className="me-4 buttonNav">Find your perfect contractor</Button>
          <Link to="/Contractors">
          <Button className="me-2 buttonNav">Apply to join as a TopContractor</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
