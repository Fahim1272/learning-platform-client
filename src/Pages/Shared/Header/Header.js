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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('./login')
  };
  const navigateToRegister = () => {
    navigate('./register')
  };
  const handelLogOut = () => {
    providerLogout()
      .then(() => { })
      .catch(error => console.error(error))

  }
  const { user, providerLogout } = useContext(AuthContext);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     {user?.displayName}
    </Tooltip>)
  return (
    <div>
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Image  style={{height:'40px',}} src='https://img.icons8.com/ios/344/experiment-trial.png'></Image>
            <Navbar.Brand className='ms-3' href="#">
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
              <Nav className="me-auto text-light">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/courses/">Courses</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Nav className='text-dark' >
              <Nav.Link>
                {
                  user?.uid ?

                    <>
                      <span>{user?.displayName}</span>
                      <Button onClick={handelLogOut} className='mx-3' variant="outline-dark">Log Out</Button>{' '}
                    </>
                    :
                    <>
                      <Button onClick={navigateToLogin} variant="outline-dark">Login</Button>{' '}
                      <Button className='ms-3' onClick={navigateToRegister} variant="outline-dark">Register</Button>{' '}
                    </>
                }

              </Nav.Link>
            </Nav>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              {/* <Button variant="success">Hover me to see</Button> */}
           
            {
              user?.photoURL ? <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUser className='text-light' ></FaUser>
            }
             </OverlayTrigger>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;