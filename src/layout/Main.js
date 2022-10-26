import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {/* <Col lg="4">
                        <h2>sidenav-left</h2>
                    </Col> */}
                    <Col >
                        {/* <h2>Main Content</h2> */}
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        
        </div>
    );
};

export default Main;