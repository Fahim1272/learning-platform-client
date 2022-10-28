import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const Checkout = ({ params }) => {
  return (
    <Row  className='justify-content-center my-5'>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Confirmation of Course</Card.Title>
          <Card.Text>
            Please Confirm this course ,
          </Card.Text>
          <Button variant="outline-dark">Confirm</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Checkout;