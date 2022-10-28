import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, details, _id, image_url, } = course;
    console.log(course);
    return (
        // style={{ width: '15rem' }} 
            <Row>
                <Col>
                    <Card className="text-center col">
                        <Card.Header>Featured</Card.Header>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {
                                    details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Course Details</Link></p> : <p>{details}</p>

                                }
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
    );
};

export default CourseCard;


/*
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
                    {
                        details.length > 250 ? <p>{details.slice (0, 250) + '...'} <Link to={`/courses/${_id}`}>Course Details</Link></p> : <p>{details}</p>
                    }
                </Card.Text>
      </Card.Body>
    </Card>













*/