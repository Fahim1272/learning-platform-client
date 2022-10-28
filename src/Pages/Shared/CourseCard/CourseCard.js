import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, details, _id, image_url, } = course;
    console.log(course);
    return (
        // style={{ width: '15rem' }} 
            
                <div className='justify-content-center'>
                    <Card className="text-center col mb-4 ">
                        <Card.Header>Course</Card.Header>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {
                                    details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Course Details</Link></p> : <p>{details}</p>

                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
           
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