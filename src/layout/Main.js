import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>sidenav-left</h2>
                    </Col>
                    <Col>
                        <h2>Main Content</h2>
                        <Outlet></Outlet>
                    </Col>
                    <Col>
                        <h2>sidenav-right</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;