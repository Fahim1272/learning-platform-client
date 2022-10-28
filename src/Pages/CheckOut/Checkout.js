import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Checkout = ({params}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Confirm Buy This Course!</Button>
        </Card.Body>
      </Card>
    );
};

export default Checkout;