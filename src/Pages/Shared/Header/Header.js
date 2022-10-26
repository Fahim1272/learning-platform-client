import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('./login')
    };

    return (
        <div>
            <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Easy Learn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/faq">Home</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Button onClick={navigateToLogin} variant="light">Login</Button>{' '}
        </Container>
      </Navbar>
    </>
        </div>
    );
};

export default Header;