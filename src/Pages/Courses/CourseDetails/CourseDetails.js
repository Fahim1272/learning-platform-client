import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {  } from "./CourseDetails.css";
import { Button } from 'react-bootstrap';

const CourseDetails = ({ params }) => {
    const courseDetails = useLoaderData();
    const componentRef = useRef();
    const handlePdf = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint : () => alert('Print success')
    })
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={courseDetails.image_url} />
                <Card.Body>
                    <Card.Title>{courseDetails.title}</Card.Title>
                    <Card.Text>
                        <div ref={componentRef} style={{width:'100%'}}>{courseDetails.details}</div>
                    </Card.Text>
                    <Link to="/checkout" >Purchase This Course</Link>
                    <Button className='ms-4' onClick={handlePdf}>Download PDF</Button>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;