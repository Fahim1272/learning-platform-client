import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const CourseDetails = ({ params }) => {
    const courseDetails = useLoaderData();
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={courseDetails.image_url} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {courseDetails.details}
                    </Card.Text>
                    <Link to="/checkout" >purchse</Link>
                    {/* <Button variant="primary">Purchase This Course</Button> */}
                </Card.Body>
            </Card>
            {/* {coursDetails.title} */}
        </div>
    );
};

export default CourseDetails;