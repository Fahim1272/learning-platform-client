import React from 'react';
import { Accordion, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Row className=' justify-content-center'>
            <h2 className='text-primary text-center my-5'>Question || Answer</h2>
            <Accordion className='w-50 my-5' defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>What is CORS?</strong></Accordion.Header>
                    <Accordion.Body>
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>Why are you using `firebase`? What other options do you have to implement authentication?</strong></Accordion.Header>
                    <Accordion.Body>
                        <strong>2.1: Why are you using firebase?</strong>
                        <p>Firebase helps us develop high-quality apps, grow Our user base, and earn more money. Each feature works independently, and they work even better together.</p>
                        <strong>2.2:What other options do you have to implement authentication?</strong>
                        <p>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>How does the private route work?</strong></Accordion.Header>
                    <Accordion.Body>
                        <strong>3.How does the Private route work?</strong>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><strong>4. What is Node? How does Node work?</strong></Accordion.Header>
                    <Accordion.Body>
                        <strong>4.1: What is Node?</strong>
                        <p>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside  tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.</p>
                        <strong>4.1: How does Work Node?</strong>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </Row>
    );
};

export default Blog;