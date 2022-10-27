import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";

const Header = () => {

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('./login')
  };
  const navigateToRegister = () => {
    navigate('./register')
  };
  const handelLogOut = () =>{
    providerLogout()
    .then( ()=> {})
    .catch( error=> console.error(error))

  }
  const { user, providerLogout } = useContext(AuthContext)
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              {/* <img
              FaUser=""
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/courses/">Courses</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Nav className='text-white' >
              <Nav.Link>
                {
                  user?.uid ?

                    <>
                      <span>{user?.displayName}</span>
                      <Button onClick={handelLogOut} className='mx-3' variant="outline-light">Log Out</Button>{' '}
                    </>
                    :
                    <>
                      <Button onClick={navigateToLogin} variant="light">Login</Button>{' '}
                      <Button className='ms-3' onClick={navigateToRegister} variant="primary">Register</Button>{' '}
                    </>
                }

              </Nav.Link>
            </Nav>
            {
              user?.photoURL ? <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUser className='text-light' ></FaUser>
            }
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;